const canvas = document.querySelector("#frontpage");

async function news() {
  const res = await fetch("http://localhost:3000/news");

  const data = await res.json();


  data.forEach((article) => {

    console.log(article.title);
    canvas.insertAdjacentHTML(
      "beforeend",
      `
        <section id="${article.category}">
        <article>
          <h1>${article.title}</h1>


          <img src="${article.picture}" alt="" />

          <p>${article.content}</p>
        </article>
      </section>
        `
    );
  });
}
news();