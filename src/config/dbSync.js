import { Appointment } from "../entity/Appointment.entity.js";
import { Payment } from "../entity/Payment.entity.js";
import { Review } from "../entity/Review.entity.js";
import { Therapist } from "../entity/Therapist.entity.js";
import { User } from "../entity/User.entity.js";
import { WaitingList } from "../entity/WaitingList.entity.js";

const dbSync = async () => {
  await User.sync()
  await Therapist.sync()
  await Review.sync()
  await Appointment.sync()
  await Payment.sync()
  await WaitingList.sync()
};

export { dbSync }
