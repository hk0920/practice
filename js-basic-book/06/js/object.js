var toyRobot = {
    productId: "123-12",
    name: "Robort",
    price: "25,000",
    madeIn: "Korea",
    quantity: 10,
    showStock: function(){
        document.querySelector("#display").innerHTML = this.name + "제품은" + this.quantity + "개 남았습니다";
    },
    showPrice: function(){
        alert(this.name + "제품의 가격은" + this.price + "원입니다.");
    }
};
toyRobot.showStock();
toyRobot.showPrice();