export default class App {
  constructor({ store }) {
    document.getElementById("plus").addEventListener("click", () => {
      store.inc();
      store.fetch();
    });

    document.getElementById("minus").addEventListener("click", () => {
      store.dec();
      store.fetch();
    });

    store.fetch();
  }

  render(state) {
    const { count, list } = state;

    document.getElementById("counter").innerText = count;
    document.getElementById("repos").innerHTML = list
      .map(item => `<li><a href="${item.html_url}">${item.full_name}</a></li>`)
      .join("");
  }
}
