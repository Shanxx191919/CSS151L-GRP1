let currentCardIndex = 0;
const cards = document.querySelectorAll('.card');
const likeButtons = document.querySelectorAll('.like');
const dislikeButtons = document.querySelectorAll('.dislike');

function showNextCard() {
    if (currentCardIndex < cards.length - 1) {
        cards[currentCardIndex].style.opacity = '0';
        currentCardIndex++;
        cards[currentCardIndex].style.opacity = '1';
    } else {
    
    }
}

function handleCardAnimation(isLiked) {
    cards[currentCardIndex].style.transform = isLiked ? 'translateX(100%)' : 'translateX(-100%)';
    setTimeout(() => {
        cards[currentCardIndex].style.display = 'none'; 
        showNextCard();
    }, 500); 
}

likeButtons.forEach(button => {
    button.addEventListener('click', () => handleCardAnimation(true));
});

dislikeButtons.forEach(button => {
    button.addEventListener('click', () => handleCardAnimation(false));
});
