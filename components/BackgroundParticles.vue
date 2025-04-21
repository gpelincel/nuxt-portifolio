<template>
    <canvas ref="canvasRef" class="absolute top-0 left-0 w-full h-full z-2"></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const canvasRef = ref(null)

onMounted(() => {
    const canvas = canvasRef.value
    const ctx = canvas.getContext('2d')

    const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
    }

    let width, height, particles = []

    class Particle {
        constructor() {
            this.x = Math.random() * width
            this.y = Math.random() * height
            this.size = Math.random() * 2 + 0.5
            this.speedX = Math.random() * 0.5 - 0.25
            this.speedY = Math.random() * 0.5 - 0.25
        }

        update() {
            this.x += this.speedX
            this.y += this.speedY
            if (this.x < 0 || this.x > width) this.speedX *= -1
            if (this.y < 0 || this.y > height) this.speedY *= -1
        }

        draw() {
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(0, 209, 255, 0.4)'
            ctx.fill()
        }
    }

    const init = () => {
        resizeCanvas()
        width = canvas.width
        height = canvas.height
        particles = []
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle())
        }
    }

    const animate = () => {
        ctx.clearRect(0, 0, width, height)
        particles.forEach(p => {
            p.update()
            p.draw()
        })
        requestAnimationFrame(animate)
    }

    window.addEventListener('resize', () => {
        init()
    })

    init()
    animate()
})
</script>