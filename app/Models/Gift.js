

export class Gift {
  constructor(data){
    this.tag = data.tag
    this.url = data.url || 'https://images.unsplash.com/photo-1639562954924-1928f7cda17c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    this.id = data.id
    this.opened = data.opened || false 
  }

  get GiftTemplate() {
    return /*html*/`
      <div class="card m-2 shadow">
        <div class="card-body">
          <h4 class="text-uppercase text-center no-select">
            ${this.tag}
          </h4>
          <img src="${this.url}" >
        </div>
        <button class="btn btn-primary square-top" onclick="app.giftController.openGift('${this.id}')">OPEN THE GIFT!</button>
      </div>
    `
  }
}