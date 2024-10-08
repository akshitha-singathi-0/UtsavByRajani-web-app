import React from 'react';

const About = () => {
    return (
        <div>
            <h1 class="pageHeader">Our Story</h1>
            <div>
                <div style={{ float: "left", height: "50vh", width: "20vw"}}>
                    <div style={{  backgroundImage: `url(${'../imgs/profile.jpg'})`,
                        height: "50vh",
                        width: "18vw"}}>

                    </div>
                </div>
                <p>Welcome to Utsav by Rajani, where every corner of your space comes alive with the rich tapestry of Indian tradition and artistry. Based in the heart of Central New Jersey, we are more than just a decoration company—we are storytellers who bring the vibrant essence of India to your home, office, and special events. Our journey began with a simple yet profound mission: to share the beauty and elegance of Indian craftsmanship with our local community.</p>
                <p>Founded by Rajani Singathi, whose passion for Indian art and culture runs deep, our company was born out of a desire to make exquisite, handcrafted decorations accessible to everyone who appreciates the timeless allure of Indian design. From the intricate embroidery of traditional textiles to the radiant hues of hand-painted ceramics, our collection reflects the diverse and rich heritage of India. Each piece is thoughtfully curated and crafted by skilled artisans, many of whom have honed their craft over generations. </p>
                <p>We take pride in celebrating these artisans' stories and preserving their techniques, ensuring that each item we offer is not just a decoration, but a piece of living history. At Utsav by Rajani, we believe that every celebration, whether big or small, deserves to be marked with beauty and grace. Whether you’re looking to transform your living space into a haven of elegance, or you need unique, culturally-inspired pieces for a special event, we are here to make your vision come to life. Our commitment extends beyond providing beautiful decor. We strive to create a personal connection with our clients, understanding their needs and helping them choose the perfect pieces that resonate with their individual tastes and occasions. With every project, we aim to infuse a touch of India’s magic and charm into your environment, ensuring that each moment is celebrated with splendor.</p> 
                    
                <p>Thank you for being part of our story. We invite you to explore our collection, experience the beauty of Indian art, and let us help you make your spaces as vibrant and unique as you are.</p>
            </div>
        </div>
    );
}

export default About;