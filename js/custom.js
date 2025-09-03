

// JavaScript Document

$('#subscribeform').submit(function(){



	var action = $(this).attr('action');



		$("#mesaj").slideUp(750,function() {







		$('#mesaj').hide();



	$('#subsubmit')







			.after('')







			.attr('disabled','disabled');



	$.post(action, {







			email: $('#subemail').val()







		},







			function(data){







				document.getElementById('mesaj').innerHTML = data;







				$('#mesaj').slideDown('slow');







				$('#subscribeform img.subscribe-loader').fadeOut('slow',function(){$(this).remove()});







				$('#subsubmit').removeAttr('disabled');







				if(data.match('success') != null) $('#subscribeform').slideUp('slow');



			}







		);







		});







		return false;







	});


	function openPopup(src, caption) {
    const popupOverlay = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');
    const popupCaption = document.querySelector('.image-popup-caption');

    popupImage.src = src;
    popupCaption.textContent = caption;
    popupOverlay.style.display = 'flex';

    const content = document.querySelector('.image-popup-content');
    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;

    content.addEventListener('mousedown', (e) => {
        isDragging = true;
        content.classList.add('is-dragging');
        startX = e.pageX - content.offsetLeft;
        startY = e.pageY - content.offsetTop;
        scrollLeft = content.scrollLeft;
        scrollTop = content.scrollTop;
        e.preventDefault();
    });

    content.addEventListener('mouseleave', () => {
        isDragging = false;
        content.classList.remove('is-dragging');
    });

    content.addEventListener('mouseup', () => {
        isDragging = false;
        content.classList.remove('is-dragging');
    });

    content.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const x = e.pageX - content.offsetLeft;
        const y = e.pageY - content.offsetTop;
        const walkX = (x - startX) * 2; // Pan speed
        const walkY = (y - startY) * 2;
        content.scrollLeft = scrollLeft - walkX;
        content.scrollTop = scrollTop - walkY;
    });
}

function closePopup() {
    document.getElementById('image-popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  // Get all topic chips
  const topicChips = document.querySelectorAll('.topic-chips a');
  // Get all the blog posts
  const blogPosts = document.querySelectorAll('.blog-content figure');

  topicChips.forEach(chip => {
    chip.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the link from jumping

      const filterValue = this.getAttribute('data-filter');

      // Loop through each blog post
      blogPosts.forEach(post => {
        // Get the topics for the current blog post
        const postTopics = post.getAttribute('data-topic');

        // Check if the blog post has the selected topic
        if (filterValue === 'all' || postTopics.includes(filterValue)) {
          post.style.display = 'block'; // Show the blog post
        } else {
          post.style.display = 'none'; // Hide the blog post
        }
      });
    });
  });
});