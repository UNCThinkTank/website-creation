

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

document.addEventListener('DOMContentLoaded', function() {
  // Blog type filter (data_story, toolkit, studio_brief)
  const filterBar = document.querySelector('.content-filter');
  const cards = document.querySelectorAll('.blog-grid .blog-card');
  if (filterBar && cards.length) {
    const btns = filterBar.querySelectorAll('[data-filter-type]');
    const setFilter = (type) => {
      cards.forEach(card => {
        const t = card.getAttribute('data-type') || '';
        const show = (type === 'all') || (t === type);
        card.style.display = show ? '' : 'none';
      });
    };
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.setAttribute('aria-pressed','false'));
        btn.setAttribute('aria-pressed','true');
        setFilter(btn.getAttribute('data-filter-type'));
      });
    });
    // Allow hero chips to drive the same filter
    document.addEventListener('click', (e) => {
      const target = e.target && (e.target.closest ? e.target.closest('.topic-chips [data-filter-type]') : null);
      if (!target) return;
      e.preventDefault();
      const type = target.getAttribute('data-filter-type') || 'all';
      btns.forEach(b => b.setAttribute('aria-pressed','false'));
      const match = filterBar.querySelector(`[data-filter-type="${type}"]`);
      if (match) match.setAttribute('aria-pressed','true');
      setFilter(type);
    });
  }

  // Make active blog cards clickable as a whole (navigate to their CTA)
  const activeCards = document.querySelectorAll('.blog-grid .blog-card[data-active="true"]');
  activeCards.forEach(function(card) {
    var link = card.querySelector('.blog-card__cta');
    if (!link) return;
    card.addEventListener('click', function(e) {
      var target = e.target;
      if (target && target.closest && target.closest('a')) return;
      window.location.href = link.getAttribute('href');
    });
  });

  // Communication funnel stage interactions
  const stages = document.querySelectorAll('.comm-stage');
  const getStageEl = (el) => el && (el.classList?.contains('comm-stage') ? el : el.closest?.('.comm-stage'));
  if (stages.length) {
    const detailTitle = document.getElementById('comm-title');
    const detailBody = document.getElementById('comm-body');
    const detailHighlights = document.getElementById('comm-highlights');
    const detailOutput = document.getElementById('comm-output');

    const updateDetail = function(stage) {
      stages.forEach(function(btn) {
        btn.setAttribute('aria-current', 'false');
      });
      stage.setAttribute('aria-current', 'true');

      if (detailTitle) {
        detailTitle.textContent = stage.getAttribute('data-title') || '';
      }
      if (detailBody) {
        detailBody.textContent = stage.getAttribute('data-description') || '';
      }
      if (detailHighlights) {
        detailHighlights.innerHTML = '';
        const highlightRaw = stage.getAttribute('data-highlights') || '';
        highlightRaw.split('|').filter(Boolean).forEach(function(item) {
          const li = document.createElement('li');
          li.textContent = item.trim();
          detailHighlights.appendChild(li);
        });
      }
      if (detailOutput) {
        detailOutput.textContent = stage.getAttribute('data-output') || '';
      }
    };

    // Direct listeners
    stages.forEach(function(stage) {
      stage.addEventListener('click', function() { updateDetail(stage); });
      stage.addEventListener('mouseenter', function() { updateDetail(stage); });
      stage.addEventListener('focus', function() { updateDetail(stage); });
    });
    // Delegated listener (in case of layout shifts)
    document.addEventListener('click', function(e){
      const stage = getStageEl(e.target);
      if (stage) { updateDetail(stage); }
    });

    updateDetail(stages[0]);
  }

  // Team bio toggles
  const toggles = document.querySelectorAll('.team-toggle');
  toggles.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const targetSelector = btn.getAttribute('data-target');
      const panel = document.querySelector(targetSelector);
      if (!panel) return;

      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // If we are opening this bio, close all others first
      if (!expanded) {
        toggles.forEach(function(other){
          if (other === btn) return;
          const otherTarget = other.getAttribute('data-target');
          const otherPanel = otherTarget ? document.querySelector(otherTarget) : null;
          other.setAttribute('aria-expanded','false');
          if (otherPanel) otherPanel.hidden = true;
          const otherCard = other.closest('.team-card');
          if (otherCard) otherCard.setAttribute('aria-expanded','false');
          other.innerHTML = 'Read full bio <span aria-hidden="true">+</span>';
        });
      }

      btn.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;

      const card = btn.closest('.team-card');
      if (card) {
        card.setAttribute('aria-expanded', String(!expanded));
      }

      btn.innerHTML = !expanded
        ? 'Hide full bio <span aria-hidden="true">&minus;</span>'
        : 'Read full bio <span aria-hidden="true">+</span>';
    });
  });

  // Capability carousel
  const capabilitySlider = document.querySelector('[data-capability-slider]');
  if (capabilitySlider) {
    const slides = capabilitySlider.querySelectorAll('[data-slide]');
    const prevBtn = document.querySelector('[data-capability-prev]');
    const nextBtn = document.querySelector('[data-capability-next]');
    const progress = document.querySelector('[data-capability-progress]');
    const dots = document.querySelectorAll('[data-capability-dot]');
    const slideCount = slides.length;
    let activeIndex = 0;
    let autoTimer = null;

    const pad = (value) => String(value).padStart(2, '0');

    const setActive = (newIndex) => {
      if (!slideCount) return;
      activeIndex = (newIndex + slideCount) % slideCount;

      slides.forEach((slide, idx) => {
        slide.classList.toggle('is-active', idx === activeIndex);
      });

      dots.forEach((dot, idx) => {
        const isActive = idx === activeIndex;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      if (progress) {
        progress.textContent = `${pad(activeIndex + 1)} / ${pad(slideCount)}`;
      }
    };

    const stopAuto = () => {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    };

    const startAuto = () => {
      if (!autoTimer) {
        autoTimer = setInterval(() => setActive(activeIndex + 1), 8000);
      }
    };

    const resetAuto = () => {
      stopAuto();
      startAuto();
    };

    prevBtn && prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      setActive(activeIndex - 1);
      resetAuto();
    });

    nextBtn && nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      setActive(activeIndex + 1);
      resetAuto();
    });

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        setActive(idx);
        resetAuto();
      });
    });

    const sliderShell = capabilitySlider.closest('.capability-shell');
    if (sliderShell) {
      sliderShell.addEventListener('mouseenter', stopAuto);
      sliderShell.addEventListener('mouseleave', startAuto);
      sliderShell.addEventListener('focusin', stopAuto);
      sliderShell.addEventListener('focusout', startAuto);
    }

    setActive(0);
    startAuto();
  }
});
