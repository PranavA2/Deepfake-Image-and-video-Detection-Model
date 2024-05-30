from flask import Flask, render_template, request, jsonify
import cv2
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Image Preprocessing
IMAGE_SIZE = (224, 224)
model_img = load_model('deepfake_detection_img_4_model.h5')
threshold_img = 0.5

def preprocess_images(array):
    resized = []
    for img in array:
        img = cv2.resize(img, IMAGE_SIZE)
        img = img / 255.0
        resized.append(img)
    return resized

def predict_fake_or_real(image_tensor):
    prediction = model_img.predict(image_tensor)
    if prediction < threshold_img:
        result = 'Real Image'
    else:
        result = 'Deepfake Image'
    return result

# Video Detection
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'mp4', 'avi', 'mkv'}
app.config['UPLOAD_FOLDER'] = 'C://Users//pajag//OneDrive//Desktop//Deepfake Project stage 2//Flask'
model_video = load_model('deepfake_detection_video_7_model.h5')
threshold_video = 0.5

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def preprocess_video(input_video):
    cap = cv2.VideoCapture(input_video)
    total_frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    sampling_interval = max(1, total_frame_count // 64)
    frame_count = 0
    frames_list = []
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        resized_frame = cv2.resize(frame,(224,224))
        frames_list.append(resized_frame)
        frame_count += 1
        if frame_count >= 64:
            break
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_count * sampling_interval)
    cap.release()
    return np.array(frames_list)

def tensor(data):
    batch = [tf.convert_to_tensor(img) for img in data]
    batch = tf.stack(batch)
    return batch

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/image', methods=['POST'])
def image_detection():
    if request.method == 'POST':
        uploaded_file = request.files['image']
        if uploaded_file.filename != '':
            image_data = cv2.imdecode(np.frombuffer(uploaded_file.read(), np.uint8), 1)
            preprocessed_images = preprocess_images([image_data])
            test_image = tf.convert_to_tensor(preprocessed_images[0])
            test_image = tf.expand_dims(test_image, axis=0)
            result = predict_fake_or_real(test_image)
            return jsonify({'result': result})
    return jsonify({'error': 'No image uploaded'})

@app.route('/video', methods=['POST'])
def video_detection():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    if file and allowed_file(file.filename):
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filepath)
        try:
            loaded_frames = preprocess_video(filepath)
            ten = tensor(loaded_frames)
            predictions = model_video.predict(ten)
            if max(predictions) > threshold_video:
                result = "Deepfake Video"
            else:
                result = "Real Video"
            return jsonify({'result1': result})
        except Exception as e:
            return jsonify({'error': 'Error processing video: ' + str(e)})
    else:
        return jsonify({'error': 'Invalid file format'})

if __name__ == '__main__':
    app.run(debug=True)
