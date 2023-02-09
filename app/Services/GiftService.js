import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { bcwApi } from "./AxiosService.js";
import { Gift } from "../Models/Gift.js";

class GiftService{
async sendGift() {
  try {
    // console.log(appState.gift)
    await bcwApi.post('gifts', appState.gift)
    
  } catch (error) {
    Pop.error(error.message)
    
  }
  
}
 async openGift(gId) {
  const res = await bcwApi.put(`/gifts/${gId}`,{opened:true})
  const foundGiftIndex = appState.gifts.findIndex(g => g.id == res.id) 
  appState.gifts.splice(foundGiftIndex,1,res)
  appState.emit('gifts')
  console.log(res.data);

}
 async getGifts() {
    try {
      const res = await bcwApi.get('/gifts')
      // console.log(res.data);
      appState.gifts = res.data.map(g => new Gift(g))
      console.log(appState.gifts);
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }

}

export const giftService = new GiftService()