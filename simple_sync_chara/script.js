const characterAmountRange = document.querySelector('#characterAmountRange');
const characterAmountNumber = document.querySelector('#characterAmountNumber');

characterAmountRange.addEventListener('input', syncCaharacterAmount);
characterAmountNumber.addEventListener('input', syncCaharacterAmount);

function syncCaharacterAmount(e) {
  let value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}