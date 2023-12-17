function toggleSidePanel() {
    var sidePanel = document.getElementById("sidePanel");
    if (sidePanel.style.width === "250px") {
        sidePanel.style.width = "0";
    } else {
        sidePanel.style.width = "250px";
    }
}

const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.classList.add('highlighted');
    });

    project.addEventListener('mouseleave', () => {
        project.classList.remove('highlighted');
    });
});

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

function rotateImage(imageElement) {
    if (imageElement) {
        imageElement.style.transform = `rotateY(360deg)`;
        imageElement.style.transition = 'transform 1.5s';
    }
}

function resetRotation(imageElement) {
    if (imageElement) {
        imageElement.style.transform = `rotateY(0deg)`;
    }
}

if (image1) {
    image1.addEventListener('mouseenter', () => rotateImage(image1));
    image1.addEventListener('mouseleave', () => resetRotation(image1));
}

if (image2) {
    image2.addEventListener('mouseenter', () => rotateImage(image2));
    image2.addEventListener('mouseleave', () => resetRotation(image2));
}


document.addEventListener('DOMContentLoaded', () => {
    const skillIcons = document.querySelectorAll('.skill-list img');

    skillIcons.forEach((icon) => {
        icon.addEventListener('mouseover', () => {
            const existingTooltip = document.querySelector('.tooltip');
            if (existingTooltip) existingTooltip.remove();

            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            const skillName = icon.getAttribute('title');
            tooltip.textContent = `J'ai acquis cette compétence : ${skillName}`;

            const iconRect = icon.getBoundingClientRect();
            tooltip.style.top = `${window.scrollY + iconRect.bottom + 5}px`;
            tooltip.style.left = `${iconRect.left}px`;

            document.body.appendChild(tooltip);
        });

        icon.addEventListener('mouseout', () => {
            const existingTooltip = document.querySelector('.tooltip');
            if (existingTooltip) existingTooltip.remove();
        });
    });
});

document.querySelectorAll('.social-link img').forEach(img => {
    img.addEventListener('mouseenter', () => img.style.opacity = '0.5');
    img.addEventListener('mouseleave', () => img.style.opacity = '1');
});

document.querySelectorAll('.certification, .course').forEach(item => {
    item.addEventListener('mouseenter', (event) => {
        const message = document.createElement('div');
        message.className = 'hover-message';

        if (item.classList.contains('certification')) {
            const certName = item.querySelector('h3').textContent;
            message.textContent = `J'ai travaillé dur pour obtenir cette certification de ${certName}`;
        } else if (item.classList.contains('course')) {
            const courseName = item.querySelector('h3').textContent;
            message.textContent = `J'ai apprécié suivre le cours de ${courseName}`;
        }

        item.appendChild(message);
        positionTooltip(item, message, event);
    });

    item.addEventListener('mouseleave', () => {
        document.querySelector('.hover-message')?.remove();
    });
});

function positionTooltip(item, tooltip, event) {
    const itemRect = item.getBoundingClientRect();
    tooltip.style.left = `${itemRect.left + (itemRect.width / 2) - (tooltip.offsetWidth / 2)}px`;
    tooltip.style.top = `${window.scrollY + itemRect.top - tooltip.offsetHeight - 10}px`; 
}




document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact__form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', (event) => {
       
        if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
            alert('Veuillez entrer un nom valide (uniquement des lettres et des espaces).');
            event.preventDefault(); 
            return;
        }

        if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            alert('Veuillez entrer une adresse email valide.');
            event.preventDefault(); 
            return;
        }

        alert('Votre message a été envoyé. Je vous répondrai dès que je consulterai mes emails.');
    });
});


const whatsappIcon = document.querySelector('.contact__section img[alt="WhatsApp"]');
whatsappIcon.title = "N'hésitez pas à envoyer un message sur WhatsApp";

