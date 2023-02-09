import { appState } from "../AppState.js";
import { giftService } from "../Services/GiftService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
function _drawGifts(){
  let template = ' '
  // @ts-ignore
  appState.gifts.forEach(g => template += g.GiftTemplate)
 setHTML('gift-area', template)
}
export class GiftController{
  constructor(){
    console.log('controller testing');
    this.getGifts()
    appState.on('gifts', _drawGifts)
  }

  async openGift(gId){
    try {
      giftService.openGift(gId)
      
    } catch (error) {
      Pop.error(error)
      console.log(error.message);
      
    }
  }

async  getGifts(){
  await giftService.getGifts()
}

async sendGift(){
  try {
    await giftService.sendGift()

    
    
  } catch (error) {
    Pop.error(error.message)
    
  }

}

}