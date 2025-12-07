document.addEventListener('DOMContentLoaded', function() {
    // Check if device supports touch
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    const sim = document.getElementById('hero-sim');
    const listener = document.getElementById('listener');
    const sounds = Array.from(sim.querySelectorAll('.sound'));
    const cursorFollower = document.getElementById('cursorFollower');
    const hero = document.querySelector('.hero');

    // Create floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`;
        hero.appendChild(particle);
    }

    // Create connection lines
    const connectionLines = sounds.map(() => {
        const line = document.createElement('div');
        line.className = 'connection-line';
        sim.appendChild(line);
        return line;
    });

    // Create ripples for sounds
    sounds.forEach(sound => {
        for (let i = 0; i < 3; i++) {
            const ripple = document.createElement('div');
            ripple.className = 'sound-ripple';
            ripple.style.animationDelay = `${i * 0.7}s`;
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            sound.appendChild(ripple);
        }
    });

    // Position sounds randomly within the simulation area
    function positionSounds() {
        const simRect = sim.getBoundingClientRect();
        const padding = 40;
        
        sounds.forEach((sound, index) => {
            const angle = (index / sounds.length) * Math.PI * 2;
            const radius = Math.min(simRect.width, simRect.height) * 0.35;
            const centerX = simRect.width / 2;
            const centerY = simRect.height / 2;
            
            // Position in a circle with some randomness
            const x = centerX + Math.cos(angle) * (radius * (0.7 + Math.random() * 0.6)) - 60;
            const y = centerY + Math.sin(angle) * (radius * (0.7 + Math.random() * 0.6)) - 20;
            
            sound.style.left = `${x}px`;
            sound.style.top = `${y}px`;
        });
    }

    // Initial position of sounds
    positionSounds();
    window.addEventListener('resize', positionSounds);

    // Handle mouse interactions for desktop
    if (!isTouchDevice) {
        document.addEventListener('mousemove', (e) => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });

        sim.addEventListener('mouseenter', () => {
            cursorFollower.classList.add('active');
        });

        sim.addEventListener('mouseleave', () => {
            cursorFollower.classList.remove('active');
            setListenerToCenter();
            resetSoundStates();
        });
    } else {
        // Hide cursor follower on touch devices
        cursorFollower.style.display = 'none';
        
        // Add touch feedback class to body
        document.body.classList.add('touch-device');
        
        // Make sounds more touch-friendly
        sounds.forEach(sound => {
            sound.style.padding = '0.75rem 1rem';
            sound.style.fontSize = '0.9rem';
        });
    }

    // Initial center position
    function setListenerToCenter() {
        const rect = sim.getBoundingClientRect();
        const x = rect.width / 2;
        const y = rect.height / 2;
        listener.style.left = x + 'px';
        listener.style.top = y + 'px';
    }

    setListenerToCenter();
    window.addEventListener('resize', setListenerToCenter);

    function updateFocus(clientX, clientY) {
        const rect = sim.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        // Update listener position
        listener.style.left = x + 'px';
        listener.style.top = y + 'px';

        const maxRadius = Math.min(rect.width, rect.height) * 0.33;
        const midRadius = maxRadius * 1.6;

        sounds.forEach((node, index) => {
            const box = node.getBoundingClientRect();
            const cx = box.left - rect.left + box.width / 2;
            const cy = box.top - rect.top + box.height / 2;
            const dx = cx - x;
            const dy = cy - y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            node.classList.remove('in-focus', 'mid-focus');

            const line = connectionLines[index];
            if (dist < maxRadius) {
                node.classList.add('in-focus');
                
                const angle = Math.atan2(dy, dx);
                const length = dist;
                line.style.left = x + 'px';
                line.style.top = y + 'px';
                line.style.width = length + 'px';
                line.style.transform = `rotate(${angle}rad)`;
                line.classList.add('active');
            } else {
                line.classList.remove('active');
                if (dist < midRadius) {
                    node.classList.add('mid-focus');
                }
            }
        });
    }

    // Handle pointer events (mouse and touch)
    let isPointerDown = false;

    function handlePointerMove(e) {
        if (isTouchDevice && !isPointerDown) return;
        
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        
        if (isTouchDevice) {
            // Add visual feedback for touch
            cursorFollower.style.display = 'block';
            cursorFollower.style.left = clientX + 'px';
            cursorFollower.style.top = clientY + 'px';
            cursorFollower.classList.add('active', 'touch-active');
        }
        
        updateFocus(clientX, clientY);
    }

    function handlePointerEnd() {
        isPointerDown = false;
        if (isTouchDevice) {
            setTimeout(() => {
                cursorFollower.classList.remove('active', 'touch-active');
                setTimeout(() => {
                    if (!isPointerDown) {
                        cursorFollower.style.display = 'none';
                    }
                }, 200);
            }, 100);
            
            // Reset to center after a delay if no new touch starts
            setTimeout(() => {
                if (!isPointerDown) {
                    setListenerToCenter();
                    resetSoundStates();
                }
            }, 500);
        } else {
            cursorFollower.classList.remove('active');
        }
    }

    function resetSoundStates() {
        setTimeout(() => {
            sounds.forEach(sound => {
                sound.classList.remove('in-focus', 'mid-focus');
            });
            connectionLines.forEach(line => line.classList.remove('active'));
        }, 120);
    }

    // Mouse events
    sim.addEventListener('pointermove', handlePointerMove);
    sim.addEventListener('pointerdown', (e) => {
        isPointerDown = true;
        handlePointerMove(e);
    });
    sim.addEventListener('pointerup', handlePointerEnd);
    sim.addEventListener('pointercancel', handlePointerEnd);
    
    // Touch events
    sim.addEventListener('touchstart', (e) => {
        e.preventDefault();
        isPointerDown = true;
        handlePointerMove(e.touches[0]);
    }, { passive: false });
    
    sim.addEventListener('touchmove', (e) => {
        e.preventDefault();
        handlePointerMove(e.touches[0]);
    }, { passive: false });
    
    sim.addEventListener('touchend', handlePointerEnd);
    sim.addEventListener('touchcancel', handlePointerEnd);

    // Nav dots interaction
    const navDots = document.querySelectorAll('.nav-dot');
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            document.querySelectorAll('.nav-dot').forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            // You can add navigation logic here if needed
        });
    });
});
