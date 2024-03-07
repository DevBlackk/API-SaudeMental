import { Appointment } from "../entity/Appointment.entity.js";
import { Client } from "../entity/Client.entity.js";
import { Payment } from "../entity/Payment.entity.js";
import { Review } from "../entity/Review.entity.js";
import { Therapist } from "../entity/Therapist.entity.js";
import { User } from "../entity/User.entity.js";
import { WaitingList } from "../entity/WaitingList.entity.js";

const syncDb = async () => {
  try {
    await User.sync();
    await Payment.sync();
    await WaitingList.sync();
    await Therapist.sync();
    await Client.sync();
    await Review.sync();
    await Appointment.sync();
  } catch (error) {
    console.log("Error")
  }  
}

export { syncDb }