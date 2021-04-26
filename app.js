const listContainer = document.getElementsByClassName("list")[0];

(function (listContainer, count) {
  for (let index = 1; index < count; index++) {
    const templateItem = `<div key=${index} class="list-item pointer" style="width: 300px; height: 75px;">
          <div class="list-item-picture"></div>

          <div class="list-item-body">
            <p class="list-item-content">
              Lorem ipsum dolor sit amet consectetur?
            </p>
          </div>

          <div class="list-item-date-box">
            <span>Monday</span>
            <h4>${index}</h4>
          </div>
        </div>`;
    listContainer.innerHTML += templateItem;
  }
})(listContainer, 40);

const observerItems = function () {
  const items = document.getElementsByClassName("list-item");
  const width = 300;
  const height = 75;

  const options = {
    root: listContainer,
    // rootMargin: "40px",
    threshold: [...Array(100).keys()].map((x) => x / 100),
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const el = entry.target;
      el.style.opacity = entry.intersectionRatio;
      el.style.width = `${width * entry.intersectionRatio}px`;
      // el.style.height = `${height * entry.intersectionRatio}px`;
    });
  }, options);

  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    observer.observe(element);
  }
};

observerItems();
