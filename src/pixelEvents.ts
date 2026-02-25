// src/pixelEvents.ts

let checkoutFired = false;

// generate unique event id
const generateEventId = () => {
  return 'evt_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
};

export const trackInitiateCheckout = () => {
  // prevent multiple fires from multiple buttons
  if (checkoutFired) return;

  // @ts-ignore
  if (typeof fbq !== 'undefined') {

    const eventID = generateEventId();

    // save event id so Purchase can reuse it
    sessionStorage.setItem('fb_event_id', eventID);

    // @ts-ignore
    fbq(
      'track',
      'InitiateCheckout',
      {
        currency: 'INR',
        value: 499.00,
      },
      { eventID }
    );

    checkoutFired = true;

    console.log("Pixel Fired: InitiateCheckout 🛒", eventID);
  }
};

export const trackVideoClick = () => {
  // @ts-ignore
  if (typeof fbq !== 'undefined') {

    const eventID = generateEventId();

    // @ts-ignore
    fbq(
      'track',
      'ViewContent',
      {
        content_name: 'Hero Video Demo',
        content_category: 'Demo',
      },
      { eventID }
    );

    console.log("Pixel Fired: Video Click 🎥", eventID);
  }
};