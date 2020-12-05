class TakeoutBox extends Fish {
  constructor(options){
    super(options);
    this.imageUri = '/images/takeoutBox.png';
  }
  // clean up the trash
  onClick(event) {
    this.kill();
  }
}
