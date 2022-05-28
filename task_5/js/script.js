const accordion = () => {
  const spoilers = document.querySelector('[data-spoilers]');

  const initSpoilersBody = (spoilers, hideSpoilerBody = true) => {
    const spoilerTitles = spoilers.querySelectorAll('[data-spoiler]');

    if(spoilerTitles.length > 0) {
      spoilerTitles.forEach(spoilerTitle => {
        if(hideSpoilerBody) {
          spoilerTitle.removeAttribute('tabindex');
          if (!spoilerTitle.classList.contains('_active')) {
            spoilerTitle.nextElementSibling.hidden = true;
          } else {
            spoilerTitle.setAttribute('tabindex', '-1');
            spoilerTitle.nextElementSibling.hidden = false;
          }
        }
      });
    }
  }

  const hideSpoilersBody = (spoilers) => {
    const spoilerActiveTitle = spoilers.querySelector('[data-spoiler]._active');

    if (spoilerActiveTitle) {
      spoilerActiveTitle.classList.remove('_active');
      _slideUp(spoilerActiveTitle.nextElementSibling, 500);
    }
  }

  const setSpoilerAction = (e) => {
    const el = e.target;

    if (el.hasAttribute('data-spoiler') || el.closest('[data-spoiler]')) {
      const spoilerTitle = el.hasAttribute('data-spoiler') ? el : el.closest('[data-spoiler]');
      if (!spoilers.querySelectorAll('._slide').length) {
        if (!spoilerTitle.classList.contains('_active')) {
          hideSpoilersBody(spoilers);
        }
        spoilerTitle.classList.toggle('_active');
        _slideToggle(spoilerTitle.nextElementSibling, 500);
      }
      e.preventDefault();
    }
  }

  const initSpoilers = () => {
    // spoilers.classList.add('_init');
    initSpoilersBody(spoilers);
    spoilers.addEventListener('click', setSpoilerAction);
  }

  let _slideUp = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = target.offsetHeight + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => {
        target.hidden = true;
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
      }, duration);
    }
  }

  let _slideDown = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      if (target.hidden) {
        target.hidden = false;
      }
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
      }, duration);
    }
  }

  let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  }

  initSpoilers();
}

accordion();