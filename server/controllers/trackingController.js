const { where } = require('sequelize');
const {
  models: { Tracking }
} = require('../models/');

class trackingController {
  async sendTracking(req, res) {
    try{
      const { s_staff_id, parcel_id, r_zip_code, s_zip_code} = req.body;
      await Tracking.create({
      s_staff_id,
      parcel_id,
      s_zip_code,
      r_zip_code,
      last_staff_id_update:s_staff_id
    })
    res.status(200).json({
      errorCode : 0,
      message: 'Tracking sent successfully !'
    })
    }catch (error) {
      console.log(error);
      res.status(500).json({
        errorCode: 1,
        message: 'Something went wrong with server'
      });
  }
  }

  async reveiceTracking(req, res) {
    try{
      const { last_staff_id_update, parcel_id} = req.body;
      await Tracking.update({
      last_staff_id_update,
      
    },{ where:{
      parcel_id
    }})
    res.status(200).json({
      errorCode : 0,
      message: 'Tracking received successfully !'
    })
    }catch (error) {
      console.log(error);
      res.status(500).json({
        errorCode: 1,
        message: 'Something went wrong with server'
      });
  }
  }
}

module.exports = new trackingController();