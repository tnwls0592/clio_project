<template>
    <div id="wrap">
        <div class="inner">
            <h1>장바구니</h1>
            <div class="cartBox">
                <div class="cartBox01">
                    <p class="cartBox01-01"><input type="checkBox"></p>
                    <p class="cartBox01-02">상품</p>
                    <p class="cartBox01-03">수량</p>
                    <p class="cartBox01-04">가격</p>
                </div>
                <div class="product1">
                    <img src="../assets/img/basic_00003138_add.gif" alt="">
                    <div class="m">
                    <p class="product01">잉크 더 젤라또 10호</p>
                    <p class="product02"><i class="fa-solid fa-minus" @click="minus1"></i>{{count1}}<i class="fa-solid fa-plus" @click="plus1"></i></p>
                    <p class="product03">{{money1}}원<i class="fa-solid fa-x"></i></p>
                    </div>
                </div>
                <div class="product2">
                    <img src="../assets/img/basic_0000004461.gif" alt=""><input type="checkBox">
                    <div class="m">
                    <p class="product01">[1+1] 에어 블러휩 블러쉬 [증정] 전용 브러쉬</p>
                    <p class="product02"><i class="fa-solid fa-minus" @click="minus2"></i>{{count2}}<i class="fa-solid fa-plus" @click="plus2"></i></p>
                    <p class="product03">{{money2}}원<i class="fa-solid fa-x"></i></p>
                </div>
                </div>
            </div>
            <div class="sum">
                <div class="sum01">
                    <p>총 상품 금액</p>
                    <p>46,100원</p>
                    <p>총 할인 금액</p>
                    <p>15,500원</p>
                    <p>예상 결제 금액</p>
                    <p>{{sum}}원</p>
                    <button class="sumBtn">선택상품 주문하기</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count1: 1,
            count2: 1,
            money1:'8,100',
            money2:'22,500',
            sum:'30,600'
        }
    },
    methods: {
        minus1() {
            this.count1 -= 1;
            this.money1 = (8100 * this.count1);
        },
        plus1(){
            this.count1 += 1;
            this.money1 = (8100 * this.count1);
        },
        minus2() {
            this.count2 -= 1;
            this.money2 = (22500 * this.count2);
        },
        plus2(){
            this.count2 += 1;
            this.money2 = (22500 * this.count2);
        }
    }
}
</script>
<style lang="scss" scoped>
    #wrap {
        margin: 0 auto;
        .inner {
            display: flex;
            max-width: 1280px;
            margin: 0 auto;
            flex-wrap: wrap;
            justify-content: space-between;
            padding-top:50px;
            h1 {
                flex: 100%;
                text-align: center;
                padding-bottom: 50px;
            }
            .cartBox {
                margin-right: 30px;
                flex: 70%;
                .cartBox01 {
                    display: flex;
                    justify-content: space-between;
                    border-top: 1px solid #000;
                    border-bottom: 1px solid #ccc;
                    line-height: 50px;
                    background: #eee;
                    text-align: center;
                    .cartBox01-01 {
                        width: 150px;
                        text-align-last: left;
                        input {
                            margin-left: 15px;
                        }
                    }
                    .cartBox01-02 {
                        width: 406px;
                    }
                    .cartBox01-03 {
                        width: 150px;
                    }
                    .cartBox01-04 {
                        width: 250px;
                    }
                }
            }
                .product1 {
                    display: flex;
                    justify-content: space-between;
                    text-align: center;
                    align-items: center;
                    line-height: 150px;
                    border-bottom: 1px solid #ccc;
                    position: relative;
                    img {
                        width: 150px;
                    }
                    input {
                        position: absolute;
                        top: 15px; left: 15px;
                    }
                    .m {
                        display: flex;
                        align-items: center;
                        .product01 {
                            width: 406px;
                        }
                        .product02 {
                            width: 150px;
                            border: 1px solid #ccc;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            i {
                                width: 25px;
                                padding: 0 25px;
                                color: #ccc;
                            }
                        }
                        .product03 {
                            width: 250px;
                            i {
                                padding-left: 10px;
                                color: #ccc;
                            }
                        }
                    }
            }
                .product2 {
                    display: flex;
                    justify-content: space-between;
                    text-align: center;
                    align-items: center;
                    line-height: 150px;
                    border-bottom: 1px solid #ccc;
                    position: relative;
                    margin-bottom: 50px;
                    img {
                        width: 150px;
                    }
                    input {
                        position: absolute;
                        top: 15px; left: 15px;
                    }
                    .m {
                        display: flex;
                        align-items: center;
                        .product01 {
                            width: 406px;
                        }
                        .product02 {
                            width: 150px;
                            border: 1px solid #ccc;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            i {
                                width: 25px;
                                padding: 0 25px;
                                color: #ccc;
                            }
                        }
                        .product03 {
                            width: 250px;
                            i {
                                padding-left: 10px;
                                color: #ccc;
                            }
                        }
                    }
            }
            .sum {
                flex: 20%;
                padding-bottom: 50px;
                .sum01 {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    border-top: 1px solid #000;
                    padding: 20px;
                    p {
                        flex: 50%;
                        line-height: 50px;
                        border-bottom: 1px solid #ccc;
                    }
                    .sumBtn {
                        flex: 100%;
                        line-height: 50px;
                        background: #000;
                        color: #fff;
                        transition: .5s;
                    }
                    :hover {
                        background: #fff;
                        color: #000;
                    }
                }
            }
        }
    }

        @media (max-width: 767px) {
        #wrap {
        margin: 0 auto;
        .inner {
            display: flex;
            max-width: 767px;
            margin: 0 auto;
            flex-wrap: wrap;
            justify-content: space-between;
            h1 {
                margin-top: 130px;
            }
            .cartBox {
                padding: 0px 0 0px 30px;
                flex: 100% 0;
                .cartBox01 {
                    display: flex;
                    border-top: 1px solid #000;
                    border-bottom: 1px solid #ccc;
                    line-height: 50px;
                    background: #eee;
                    text-align: center;
                    .cartBox01-01 {
                        width: 150px;
                        text-align-last: left;
                        input {
                            margin-left: 15px;
                        }
                    }
                    .cartBox01-02 {
                        display: none;
                    }
                    .cartBox01-03 {
                        display: none;
                    }
                    .cartBox01-04 {
                        display: none;
                    }
                }
                .product1 {
                    display:flex;
                    text-align: center;
                    align-items: center;
                    justify-content: start;
                    border-bottom: 1px solid #ccc;
                    .m {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        height: 150px;
                        max-width: 617px;
                        margin: 0 auto;
                        .product01 {
                            line-height: 20px;
                            width: auto;
                        }
                        .product02 {
                            width: auto;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 120px;
                            border: 1px solid #ccc;
                            height: 30px;
                            margin: 10px 0;
                            i {
                                width: 25px;
                                padding: 0 25px;
                                color: #ccc;
                            }
                        }
                        .product03 {
                            width: auto;
                            line-height: 20px;
                            i {
                                color: #ccc;
                            }
                        }
                    }
                }
                .product2 {
                    display:flex;
                    text-align: center;
                    align-items: center;
                    justify-content: start;
                    border-bottom: 1px solid #ccc;
                    .m {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        height: 150px;
                        max-width: 617px;
                        align-items: center;
                        margin: 0 auto;
                        .product01 {
                            width: auto;
                            line-height: 20px;
                        }
                        .product02 {
                            width: auto;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 120px;
                            border: 1px solid #ccc;
                            height: 30px;
                            margin: 10px 0;
                            i {
                                color: #ccc;
                            }
                        }
                        .product03 {
                            width: auto;
                            line-height: 20px;
                            i {
                                padding-left: 10px;
                                color: #ccc;
                            }
                        }
                    }
                }
            }
            .sum {
                flex: 100%;
                margin: 0 30px;
                padding-bottom: 50px;
                border: 1px solid #ccc;
                height: 200px;
                margin-bottom: 50px;
                .sum01 {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    border-top: 1px solid #000;
                    padding: 20px;
                    p {
                        flex: 50%;
                        line-height: 50px;
                        border-bottom: 1px solid #ccc;
                    }
                    .sumBtn {
                        flex: 100%;
                        line-height: 50px;
                        background: #000;
                        color: #fff;
                        transition: .5s;
                        border: none;
                    }
                    .sumBtn:hover {
                        background: #ff397b;
                        color: #fff;
                        border: none;
                    }
                }
            }
        }
    }
    }
</style>