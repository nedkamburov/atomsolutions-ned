document.addEventListener('DOMContentLoaded', ready);

function ready() {
  activateSlider();
}

function activateSlider() {
  let arrows = Array.from(document.querySelectorAll('.arrow'));
  let members = document.querySelectorAll('.member');
  let index = 0;
  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      if (arrow.classList.contains('arrow-left')) {
        index--;
      } else {
        index++;
      }

      let leftArrow = arrows.filter(arrow => arrow.classList.contains('arrow-left'))[0];
      let rightArrow = arrows.filter(arrow => arrow.classList.contains('arrow-right'))[0];

      if (index <= 0) {
        index = 0;
        leftArrow.classList.remove('active');
        rightArrow.classList.add('active');
      } else if (index >= members.length - 1) {
        index = members.length - 1;
        rightArrow.classList.remove('active');
        leftArrow.classList.add('active');
      }

      members.forEach(member => {
        member.classList.remove('active');
      });
      members[index].classList.add('active');
    })
  });
}
