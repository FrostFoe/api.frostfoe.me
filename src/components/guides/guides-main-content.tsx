export function GuidesMainContent() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        নির্দেশিকা
      </h1>
      <p className="text-oa-text-secondary mb-12">
        আমাদের প্ল্যাটফর্ম ব্যবহারের জন্য গুরুত্বপূর্ণ নির্দেশিকা, যেমন ত্রুটি
        ব্যবস্থাপনা, রেট লিমিট এবং সেরা অনুশীলন সম্পর্কে জানুন।
      </p>

      <section id="errors" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          ত্রুটি ব্যবস্থাপনা
        </h2>
        <p className="text-oa-text-secondary">
          এপিআই অনুরোধে কোনো সমস্যা হলে, আমরা স্ট্যান্ডার্ড HTTP স্ট্যাটাস
          কোড এবং একটি তথ্যবহুল JSON অবজেক্টের মাধ্যমে প্রতিক্রিয়া জানাই।
          সাধারণত, 4xx রেঞ্জের স্ট্যাটাস কোড ক্লায়েন্ট-সাইড ত্রুটি বোঝায়
          (যেমন, 잘못 ইনপুট) এবং 5xx রেঞ্জের স্ট্যাটাস কোড সার্ভার-সাইড
          সমস্যা নির্দেশ করে।
        </p>
      </section>
      
      <section id="rate-limiting" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          রেট লিমিট
        </h2>
        <p className="text-oa-text-secondary">
          আমাদের এপিআই-এর অপব্যবহার রোধ করতে এবং সকল ব্যবহারকারীর জন্য
          স্থিতিশীল পরিষেবা নিশ্চিত করতে, আমরা রেট লিমিটিং প্রয়োগ করি।
          সাধারণত, প্রতি মিনিটে ১০০টি অনুরোধের সীমা নির্ধারণ করা আছে। এই
          সীমা অতিক্রম করলে আপনি `429 Too Many Requests` স্ট্যাটাস কোড
          পাবেন।
        </p>
      </section>

      <section id="webhooks" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          ওয়েবহুক
        </h2>
        <p className="text-oa-text-secondary">
          আমাদের প্ল্যাটফর্মে নির্দিষ্ট কিছু ঘটনা ঘটলে (যেমন, একটি নতুন ডেটা
          তৈরি হলে) আপনাকে রিয়েল-টাইমে অবহিত করার জন্য ওয়েবহুক ব্যবহার
          করতে পারেন। ওয়েবহুক সেট আপ করার জন্য আপনার অ্যাকাউন্টের
          সেটিংস থেকে একটি এন্ডপয়েন্ট ইউআরএল যোগ করতে হবে।
        </p>
      </section>

      <section id="best-practices" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          সেরা অনুশীলন
        </h2>
        <p className="text-oa-text-secondary">
          আমাদের এপিআই ব্যবহার করার সময় সেরা পারফরম্যান্স এবং নির্ভরযোগ্যতা
          নিশ্চিত করতে কিছু অনুশীলন অনুসরণ করার পরামর্শ দেওয়া হচ্ছে। এর
          মধ্যে রয়েছে ক্যাশিং প্রয়োগ করা, 효율ীভাবে ডেটা কোয়েরি করা এবং
          ত্রুটিগুলো সঠিকভাবে পরিচালনা করা।
        </p>
      </section>
    </>
  );
}
