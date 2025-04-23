export function adjustboxWrapperHeight() {
  const box = document.getElementById('box');
  const boxWrapper = document.querySelector('.box-wrapper');
  

  const updateHeightAndScroll = () => {
    if (box && boxWrapper) {
      let totalHeight = 0;
      
      // Calculate total height of all children in the box
      Array.from(box.children).forEach((child) => {
        totalHeight += child.offsetHeight;
      });

      // const fiveVH = window.innerHeight * -0.1;

      // Set the height of boxWrapper based on the total height + 5vh
      boxWrapper.style.height = totalHeight + 'px';
      // header.style.height = totalHeight + 'px';

      // Sync scroll position on box load, refresh, or resize
      box.scrollTop = window.scrollY;
    }
  };

  // Call the function initially to set everything up
  updateHeightAndScroll();

  // Recalculate on window resize
  window.addEventListener('resize', updateHeightAndScroll);

  // Synchronize box scroll with window scroll
  window.addEventListener('scroll', () => {
    if (!box) return;
    const currentScrollY = window.scrollY;
    box.scrollTop = currentScrollY;
  });
}
