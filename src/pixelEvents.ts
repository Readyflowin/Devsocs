// src/pixelEvents.ts

export const trackInitiateCheckout = () => {
  // @ts-ignore
  if (typeof fbq !== 'undefined') {
    // @ts-ignore
    fbq('track', 'InitiateCheckout', {
      currency: 'INR',
      value: 499.00
    });
    console.log("Pixel Fired: InitiateCheckout 🛒");
  }
};

export const trackVideoClick = () => {
  // @ts-ignore
  if (typeof fbq !== 'undefined') {
    // @ts-ignore
    fbq('track', 'ViewContent', {
      content_name: 'Hero Video Demo',
      content_category: 'Demo'
    });
    console.log("Pixel Fired: Video Click 🎥");
  }
};