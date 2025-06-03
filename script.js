const tooltip = document.getElementById('tooltip');
const tooltipText = document.getElementById('tooltip-text');
const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  icon.addEventListener('mousemove', (e) => {
    tooltipText.textContent = icon.dataset.label;
    tooltip.style.left = `${e.pageX}px`;
    tooltip.style.top = `${e.pageY}px`;
    tooltip.classList.remove('hidden');
  });

  icon.addEventListener('mouseleave', () => {
    tooltip.classList.add('hidden');
  });
});

document.querySelectorAll('.mix-card').forEach(card => {
  card.addEventListener('click', () => {
    // Collapse other cards
    document.querySelectorAll('.mix-card').forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove('expanded');
        const content = otherCard.querySelector('.expanded-content');
        if (content) content.classList.add('hidden');
      }
    });

    // Toggle current card
    card.classList.toggle('expanded');
    const expandedContent = card.querySelector('.expanded-content');
    if (expandedContent) {
      expandedContent.classList.toggle('hidden');
    }
  });
});

