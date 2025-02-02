import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary} from 'cloudinary';
import doctorModel from '../models/doctorModel.js';
import jwt from 'jsonwebtoken';

// API for adding doctor
const addDoctor = async (req, res) => {
  try {
    const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
    const imageFile = req.file;

    console.log({ name, email, password, speciality, degree, experience, about, fees, address }, imageFile);

    if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
      return res.json({ success: false, message: 'Missing Details' });
    }

    if (!imageFile) {
      return res.json({ success: false, message: 'Image is required' });
    }

    // Upload immagine a Cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
    const imageUrl = imageUpload.secure_url;

    // Creazione del modello del dottore
    const doctorData = {
      name,
      email,
      image: imageUrl,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
      date: Date.now(),
    };

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    res.json({ success: true, message: 'Doctor added' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};


// API for admin Login
const loginAdmin = async (req, res) => {
  try {

    const { email, password } = req.body;

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

      const token = jwt.sign(email+password, process.env.JWT_SECRET);
      res.json({success: true, token});

    } else {
      return res.json({success: false, message: 'Invalid credentials'});
    }

  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
}

// API to get all doctors list for admin panel
const allDoctors = async (req, res) => {
  try {

    const doctors = await doctorModel.find({}).select('-password');
    res.json({success: true, doctors});
    
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
}

export { addDoctor, loginAdmin, allDoctors };