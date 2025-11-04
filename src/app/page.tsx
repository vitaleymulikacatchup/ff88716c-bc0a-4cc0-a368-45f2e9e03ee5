"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Book, Grain, Gift, HandHeart, Heart, HelpCircle, MessageCircle, ShoppingBag, Star, Sun, Users, Wheat } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Products", id: "product" },
            { name: "Reviews", id: "testimonial" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Fresh Bakery"
          button={{ text: "Order Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Fresh Baked Goodness Daily"
          description="Handcrafted breads, pastries, and cakes made with love in the heart of Ukraine. Experience authentic flavors that bring families together."
          tag="Local Bakery"
          tagIcon={Heart}
          buttons={[
            { text: "View Products", href: "product" },
            { text: "Order Today", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/16521891/pexels-photo-16521891.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Fresh baked bread and pastries display"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story"
          description="For over two generations, we've been crafting traditional Ukrainian breads and pastries using time-honored recipes passed down through our family."
          tag="About Us"
          tagIcon={Wheat}
          bulletPoints={[
            {
              title: "Traditional Recipes",
              description: "Authentic Ukrainian baking methods preserved for generations",
              icon: Book
            },
            {
              title: "Fresh Daily",
              description: "Everything baked fresh every morning using local ingredients",
              icon: Sun
            },
            {
              title: "Family Owned",
              description: "A local family business serving our community with pride",
              icon: Users
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5964530/pexels-photo-5964530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Master baker working with dough"
          imagePosition="left"
          buttons={[{ text: "Our Story", href: "#story" }]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Why Choose Us"
          description="What makes our bakery special and beloved by our local community"
          tag="Our Values"
          tagIcon={Star}
          features={[
            {
              title: "Premium Ingredients",
              description: "We use only the finest local flour, organic eggs, and natural ingredients sourced from Ukrainian farms",
              icon: Grain
            },
            {
              title: "Artisan Methods",
              description: "Traditional hand-kneading and slow fermentation processes ensure exceptional flavor and texture",
              icon: HandHeart
            },
            {
              title: "Custom Orders",
              description: "Special occasion cakes, catering, and custom baking services for your celebrations",
              icon: Gift
            },
            {
              title: "Community Focus",
              description: "Supporting local suppliers and serving our neighbors with warmth and dedication",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Fresh Daily Selections"
          description="Our most popular items, baked fresh every morning with traditional recipes"
          tag="Bestsellers"
          tagIcon={ShoppingBag}
          products={[
            {
              id: "1",
              name: "Traditional Ukrainian Bread",
              price: "₴45",
              imageSrc: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh Ukrainian sourdough bread",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Mixed Pastry Box",
              price: "₴120",
              imageSrc: "https://images.pexels.com/photos/9242434/pexels-photo-9242434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Assorted fresh pastries and croissants",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Custom Celebration Cake",
              price: "₴350",
              imageSrc: "https://images.pexels.com/photos/974386/pexels-photo-974386.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Beautiful custom decorated cake",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Hear from locals who've made us part of their daily lives"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Oksana Petrenko",
              role: "Local Resident",
              testimonial: "The bread here reminds me of my grandmother's baking. Every morning I come for fresh loaves - they're absolutely perfect with that crispy crust and soft inside.",
              imageSrc: "https://images.pexels.com/photos/7144185/pexels-photo-7144185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Oksana Petrenko"
            },
            {
              id: "2",
              name: "Mikhail Kovalenko",
              role: "Restaurant Owner",
              testimonial: "We've been ordering bread for our restaurant from this bakery for over a year. The quality is consistently excellent and our customers always compliment the bread.",
              imageSrc: "https://images.pexels.com/photos/3985083/pexels-photo-3985083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Mikhail Kovalenko"
            },
            {
              id: "3",
              name: "Anna Shevchenko",
              role: "Mother of Three",
              testimonial: "My children absolutely love the pastries here. The bakers are so kind and always remember our family's favorites. It's become our weekend tradition.",
              imageSrc: "https://images.pexels.com/photos/3985083/pexels-photo-3985083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Anna Shevchenko"
            },
            {
              id: "4",
              name: "Viktor Bondarenko",
              role: "Office Manager",
              testimonial: "For office celebrations, we always order cakes from here. They're not only beautiful but incredibly delicious. The whole team looks forward to these treats.",
              imageSrc: "https://images.pexels.com/photos/9853292/pexels-photo-9853292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Viktor Bondarenko"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Common Questions"
          description="Everything you need to know about our bakery, orders, and services"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What are your opening hours?",
              content: "We're open Monday to Saturday from 7:00 AM to 7:00 PM, and Sunday from 8:00 AM to 5:00 PM. We start baking at 4:00 AM to ensure everything is fresh when you arrive."
            },
            {
              id: "2",
              title: "Do you take custom cake orders?",
              content: "Yes! We specialize in custom cakes for birthdays, weddings, and special occasions. Please order at least 48 hours in advance. Contact us to discuss your design and dietary requirements."
            },
            {
              id: "3",
              title: "What payment methods do you accept?",
              content: "We accept cash, Ukrainian bank cards, and mobile payments. For large orders over ₴500, we require a 50% deposit when placing the order."
            },
            {
              id: "4",
              title: "Do you offer delivery?",
              content: "We offer local delivery within 10km for orders over ₴200. Delivery fee is ₴30. For catering orders over ₴1000, delivery is free. Please call to arrange delivery times."
            },
            {
              id: "5",
              title: "Are your products made with local ingredients?",
              content: "Yes, we source flour from local Ukrainian mills, use organic eggs from nearby farms, and buy seasonal fruits from local suppliers whenever possible. We're committed to supporting our community."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Visit Us or Place an Order"
          description="Stop by our cozy bakery or send us your custom order details. We're here to make your celebrations sweeter."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your order or any special requirements...",
            rows: 4,
            required: true
          }}
          buttonText="Send Order"
          imageSrc="https://images.pexels.com/photos/8441258/pexels-photo-8441258.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy bakery interior with display case"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Fresh Bakery"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "#story" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Fresh Bread", href: "product" },
                { label: "Pastries", href: "product" },
                { label: "Custom Cakes", href: "product" }
              ]
            },
            {
              items: [
                { label: "Order Online", href: "contact" },
                { label: "Delivery Info", href: "faq" },
                { label: "Catering", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}