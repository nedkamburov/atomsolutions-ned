document.addEventListener('DOMContentLoaded', ready);

function ready() {
  activateSlider();
  menuBtn();
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

function menuBtn() {
  let isOpened = false;
  const menuToggleBtn = document.getElementsByClassName('toggle-menu')[0];
  let menu = document.getElementsByClassName('menu-items')[0];

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu.style.height = `auto`;
    } else {
      menu.style.height = `0px`;
    }
  });

  menuToggleBtn.addEventListener('click', () => {
    if (isOpened) {
      menu.style.height = `0px`;
    } else {
      let newHeight = menu.scrollHeight;
      menu.style.height = `${newHeight}px`;
    }
    isOpened = !isOpened;
  })
}