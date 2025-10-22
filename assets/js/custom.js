

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
  // Blog filters: by content type and by topic
  const filterBar = document.querySelector('.content-filter');
  const topicBar = document.querySelector('.topic-filter');
  const cards = document.querySelectorAll('.blog-grid .blog-card');
  if (cards.length) {
    let activeType = 'all';
    let activeTopic = 'all';

    const applyFilters = () => {
      cards.forEach(card => {
        const t = card.getAttribute('data-type') || '';
        const topicList = (card.getAttribute('data-topic') || '')
          .split(/[\s,]+/)
          .map(entry => entry.trim().toLowerCase())
          .filter(Boolean);
        const typeOk = (activeType === 'all') || (t === activeType);
        const topicOk = (activeTopic === 'all') ||
          topicList.includes('all') ||
          topicList.includes(activeTopic);
        card.style.display = (typeOk && topicOk) ? '' : 'none';
      });
    };

    if (filterBar) {
      const typeBtns = filterBar.querySelectorAll('[data-filter-type]');
      typeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          typeBtns.forEach(b => b.setAttribute('aria-pressed','false'));
          btn.setAttribute('aria-pressed','true');
          activeType = btn.getAttribute('data-filter-type') || 'all';
          applyFilters();
        });
      });
    }

    if (topicBar) {
      const topicBtns = topicBar.querySelectorAll('[data-filter-topic]');
      topicBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          topicBtns.forEach(b => b.setAttribute('aria-pressed','false'));
          btn.setAttribute('aria-pressed','true');
          activeTopic = btn.getAttribute('data-filter-topic') || 'all';
          applyFilters();
        });
      });
    }

    applyFilters();
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

  // Toolkit references & inline citations
  if (document.body.classList.contains('toolkit-page')) {
    const content = document.querySelector('.toolkit-content');
    if (content) {
      const referencesHeading = content.querySelector('#references');
      if (referencesHeading) {
        const referencesList = (referencesHeading.nextElementSibling && referencesHeading.nextElementSibling.tagName === 'OL')
          ? referencesHeading.nextElementSibling
          : content.querySelector('#references + ol');
        if (referencesList) {
          referencesList.classList.add('toolkit-reference-list');
          const referenceItems = Array.from(referencesList.children || []).filter((item) => item.tagName === 'LI');
          const referenceIndexMap = {};
          referenceItems.forEach((item, index) => {
            const refNumber = index + 1;
            const id = item.id && item.id.trim().length ? item.id : `ref-${refNumber}`;
            item.id = id;
            referenceIndexMap[String(refNumber)] = id;
          });

          const citationTest = /\[\d+\]/;
          const citationRegex = /\[(\d+)\]/g;
          const walker = document.createTreeWalker(
            content,
            NodeFilter.SHOW_TEXT,
            {
              acceptNode(node) {
                if (!node || !node.parentElement) return NodeFilter.FILTER_REJECT;
                if (node.parentElement.closest('#references')) return NodeFilter.FILTER_REJECT;
                if (node.parentElement.closest('.toolkit-reference-list')) return NodeFilter.FILTER_REJECT;
                if (node.parentElement.closest('a, code, pre, samp, kbd')) return NodeFilter.FILTER_REJECT;
                if (!citationTest.test(node.nodeValue || '')) return NodeFilter.FILTER_SKIP;
                return NodeFilter.FILTER_ACCEPT;
              }
            },
            false
          );

          const textNodes = [];
          while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
          }

          textNodes.forEach((textNode) => {
            const original = textNode.nodeValue || '';
            if (!citationTest.test(original)) return;
            citationRegex.lastIndex = 0;
            let lastIndex = 0;
            let match;
            const fragment = document.createDocumentFragment();

            while ((match = citationRegex.exec(original)) !== null) {
              const matchIndex = match.index;
              const matchText = match[0];
              const citationNumber = match[1];

              if (matchIndex > lastIndex) {
                fragment.appendChild(document.createTextNode(original.slice(lastIndex, matchIndex)));
              }

              const refId = referenceIndexMap[citationNumber] || `ref-${citationNumber}`;
              const citationLink = document.createElement('a');
              citationLink.className = 'toolkit-citation';
              citationLink.href = `#${refId}`;
              citationLink.setAttribute('data-citation-index', citationNumber);
              citationLink.textContent = `[${citationNumber}]`;
              fragment.appendChild(citationLink);

              lastIndex = matchIndex + matchText.length;
            }

            if (lastIndex < original.length) {
              fragment.appendChild(document.createTextNode(original.slice(lastIndex)));
            }

            textNode.parentNode.replaceChild(fragment, textNode);
          });

          const highlightCitations = (refId) => {
            if (!refId) return;
            const targets = content.querySelectorAll(`a.toolkit-citation[href="#${refId}"]`);
            if (!targets.length) return;
            targets.forEach((anchor) => {
              anchor.classList.add('is-highlighted');
            });
            window.setTimeout(() => {
              targets.forEach((anchor) => anchor.classList.remove('is-highlighted'));
            }, 1500);
          };

          const handleHashHighlight = () => {
            const hash = window.location.hash ? window.location.hash.substring(1) : '';
            if (!hash) return;
            highlightCitations(hash);
          };

          window.addEventListener('hashchange', handleHashHighlight);
          if (window.location.hash) {
            window.setTimeout(handleHashHighlight, 0);
          }
        }
      }
    }
  }

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

  // Team bio toggles (only one open at a time)
  const teamCards = document.querySelectorAll('.team-card');
  teamCards.forEach(function(card){
    const btn = card.querySelector('.team-toggle');
    const panel = card.querySelector('.team-bio-long');
    if (!btn || !panel) return;
    btn.addEventListener('click', function(){
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      // Close all other bios
      document.querySelectorAll('.team-card .team-toggle[aria-expanded="true"]').forEach(function(otherBtn){
        if (otherBtn === btn) return;
        otherBtn.setAttribute('aria-expanded','false');
        const oc = otherBtn.closest('.team-card');
        const op = oc && oc.querySelector('.team-bio-long');
        if (op) op.hidden = true;
        if (oc) oc.setAttribute('aria-expanded','false');
        otherBtn.innerHTML = 'Read full bio <span aria-hidden="true">+</span>';
      });
      // Toggle current card
      btn.setAttribute('aria-expanded', String(!isOpen));
      panel.hidden = isOpen;
      card.setAttribute('aria-expanded', String(!isOpen));
      btn.innerHTML = !isOpen
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
