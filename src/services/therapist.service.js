import { Therapist } from "../entity/Therapist.entity.js";

class TherapistService{
    async createTherapist(licenseNumber, medicalSpecialty){
        return await Therapist.create({

            licenseNumber,
            medicalSpecialty,
            
          });
        }
    
    async  getAllTherapists(){
        return await Therapist.findAll()
    }

        // async updateTherapsit(id, licenseNumber, medicalSpecialty){
        //     await Therapist.update({
        //         licenseNumber,
        //         medicalSpecialty,
        //     },
        //     {
        //         where: { 
        //             id 
        //         },
        //     })
        // }
        
        async updateTherapist(id, licenseNumber, medicalSpecialty) {
            await Therapist.update(
              {
                licenseNumber,
                medicalSpecialty,
              },
              {
                where: { id },
              }
            );
          }

    }


export {TherapistService};