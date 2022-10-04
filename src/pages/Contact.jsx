import React from "react";
import MainLayout from './../layouts/MainLayout';

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact</h1>
      <img
        src="https://images.pexels.com/photos/13811598/pexels-photo-13811598.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="gambar"
        style={{
          width: 100,
          height: 200,
          objectFit: "cover",
        }}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in delectus voluptas optio accusamus, animi omnis porro nesciunt assumenda officia necessitatibus perspiciatis harum quasi, voluptatem, accusantium quis aliquid! Molestias,
        fugit?
      </p>
    </MainLayout>
  );
}
