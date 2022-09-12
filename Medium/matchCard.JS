var cards = document.querySelectorAll('.card');
let cardOne, cardTwo;
let dis_Deck = false;
let matchedCard = 0;
let failedChose = 8;

var resultScore = document.querySelector('#score');
var resultFaild = document.querySelector('#faild');
resultFaild.textContent = failedChose;
resultScore.textContent = matchedCard;

function flipCard(e) {
    let clickedCard = e.target;

    if (clickedCard != cardOne && !dis_Deck) {
        clickedCard.classList.add('flip');

        if (!cardOne) {
            return cardOne = clickedCard;
            dis_Deck = true;
        }

        cardTwo = clickedCard;
        let cardOneImg = cardOne.querySelector('img').src,
            cardTwoImg = cardTwo.querySelector('img').src;
        matchCards(cardOneImg, cardTwoImg);
    }

}
function matchCards(img1, img2) {
    if (img1 == img2) {
        matchedCard++;
        if (matchedCard == 8) {

            setTimeout(() => {
                alert('Congratulations You Win !!!');
                return shuffCard();

            }, 1200)
        }

        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);
        cardOne = cardTwo = '';
        resultScore.textContent = matchedCard;

        return dis_Deck = false;
    } else {
        failedChose--;
        if (failedChose == 0) (
            setTimeout(() => {
                alert(' You Lose 😭😭😭');
                return shuffCard();
            }, 1200)
        )
        setTimeout(() => {
            cardOne.classList.remove('flip');
            cardTwo.classList.remove('flip');
            cardOne = cardTwo = '';
            dis_Deck = false;
        }, 400);
        resultFaild.textContent = failedChose;

    }
}

function shuffCard() {
    matchedCard = 0;
    failedChose = 8;
    cardOne = cardTwo = '';

    cards.forEach(card => {
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
    })
}

cards.forEach(card => {
    card.addEventListener('click', flipCard);
    //card.classList.add('flip');
});