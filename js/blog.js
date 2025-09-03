// Most recent blog post added on top

document.addEventListener('DOMContentLoaded', () => {

    const posts = [
      {
        title: "Initial Plot: Tracking the Shingles Shot Surge",
        link: "B1.State-level trends in adult vaccination6.27.html",
        date: "27 June 2025",
        image: "images/Custom Logo Minimalistic.png",
        description: "Our inaugural story distilling the key numbers, charts, and trends of shingles vaccinations in the United States."
      },
      {
        title: "Example Post 2",
        link: "B2.html",
        date: "3 September 2025",
        image: "images/Custom Logo Minimalistic.png",
        description: "Second Post Example Sample Filler"
      },
       {
        title: "Sample Blog Post",
        link: "sample-post.html",
        date: "24 July 2025",
        image: "images/Custom Logo Minimalistic.png",
        description: "This is a sample news post title content or sample post heading."
      }
    ];

    const column1 = document.querySelector('.col-xs-12:first-of-type .grid-lod');
    const column2 = document.querySelector('.col-xs-12:last-of-type .grid-lod');
    
    let htmlContent1 = '';
    let htmlContent2 = '';

    if (column1 && column2) {
      posts.forEach((post, index) => {
        const tileHTML = `
          <li>
            <section class="blog-content">
              <a href="${post.link}">
                <figure>
                  <div class="post-date">
                    <span>${post.date.split(' ')[0]}</span> ${post.date.split(' ')[1]} ${post.date.split(' ')[2] || ''}
                  </div>
                  <img src="${post.image}" alt="${post.title}" class="img-responsive"/>
                </figure>
                <article>
                  ${post.title}
                </article>
              </a>
            </section>
          </li>
        `;
        if (index % 2 === 0) {
          htmlContent1 += tileHTML;
        } else {
          htmlContent2 += tileHTML;
        }
      });
      
      // Insert all generated HTML at once
      column1.innerHTML = htmlContent1;
      column2.innerHTML = htmlContent2;
      
      // After all content is added, trigger the layout script
      imagesLoaded(document.querySelector('.grid-lod'), function() {
        new AnimOnScroll( document.querySelector('.grid-lod'), {
            minDuration : 0.4,
            maxDuration : 0.7,
            viewportFactor : 0.2
        });
      });
    }
});