export function GuidesMainContent() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        নির্দেশিকা
      </h1>
      <p className="text-oa-text-secondary mb-12">
        আমাদের প্ল্যাটফর্ম ব্যবহারের জন্য গুরুত্বপূর্ণ নির্দেশিকা, যেমন ত্রুটি
        ব্যবস্থাপনা, রেট লিমিট এবং সেরা অনুশীলন সম্পর্কে জানুন। এই গাইডগুলো
        আপনাকে আমাদের এপিআই ব্যবহার করে আরও শক্তিশালী এবং নির্ভরযোগ্য
        অ্যাপ্লিকেশন তৈরি করতে সাহায্য করবে।
      </p>

      <section id="errors" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          ত্রুটি ব্যবস্থাপনা (Error Handling)
        </h2>
        <p className="text-oa-text-secondary mb-4">
          এপিআই অনুরোধে কোনো সমস্যা হলে, আমরা স্ট্যান্ডার্ড HTTP স্ট্যাটাস
          কোড এবং একটি তথ্যবহুল JSON অবজেক্টের মাধ্যমে প্রতিক্রিয়া জানাই।
          সাধারণত, 4xx রেঞ্জের স্ট্যাটাস কোড ক্লায়েন্ট-সাইড ত্রুটি বোঝায়
          (যেমন, ভুল ইনপুট, অথেন্টিকেশন সমস্যা) এবং 5xx রেঞ্জের স্ট্যাটাস কোড
          সার্ভার-সাইড সমস্যা নির্দেশ করে।
        </p>
        <p className="text-oa-text-secondary">
          উদাহরণস্বরূপ, একটি `401 Unauthorized` ত্রুটি মানে আপনার API কী ভুল বা
          অনুপস্থিত। একটি `429 Too Many Requests` মানে আপনি আপনার রেট লিমিট
          অতিক্রম করেছেন। আপনার কোডে এই ত্রুটিগুলো সঠিকভাবে পরিচালনা করা
          উচিত।
        </p>
      </section>

      <section id="rate-limiting" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          রেট লিমিট (Rate Limiting)
        </h2>
        <p className="text-oa-text-secondary mb-4">
          আমাদের এপিআই-এর অপব্যবহার রোধ করতে এবং সকল ব্যবহারকারীর জন্য
          স্থিতিশীল পরিষেবা নিশ্চিত করতে, আমরা রেট লিমিটিং প্রয়োগ করি। আপনার
          প্ল্যানের উপর নির্ভর করে, প্রতি মিনিটে নির্দিষ্ট সংখ্যক অনুরোধের সীমা
          নির্ধারণ করা আছে। ফ্রি টায়ারে সাধারণত প্রতি মিনিটে ৬০টি অনুরোধের সীমা
          থাকে।
        </p>
        <p className="text-oa-text-secondary">
          রেসপন্স হেডারে (`X-RateLimit-Limit`, `X-RateLimit-Remaining`,
          `X-RateLimit-Reset`) আপনি আপনার বর্তমান লিমিট সম্পর্কে তথ্য পাবেন।
          এই সীমা অতিক্রম করলে আপনি `429 Too Many Requests` স্ট্যাটাস কোড
          পাবেন।
        </p>
      </section>

      <section id="webhooks" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          ওয়েবহুক (Webhooks)
        </h2>
        <p className="text-oa-text-secondary mb-4">
          আমাদের প্ল্যাটফর্মে নির্দিষ্ট কিছু ঘটনা ঘটলে (যেমন, একটি মডেলের নতুন
          ভার্সন রিলিজ হলে বা আপনার অ্যাকাউন্টে কোনো গুরুত্বপূর্ণ পরিবর্তন হলে)
          আপনাকে রিয়েল-টাইমে অবহিত করার জন্য ওয়েবহুক ব্যবহার করতে পারেন।
        </p>
        <p className="text-oa-text-secondary">
          ওয়েবহুক সেট আপ করার জন্য আপনার অ্যাকাউন্টের ড্যাশবোর্ড থেকে একটি
          এন্ডপয়েন্ট ইউআরএল যোগ করতে হবে। যখন কোনো ইভেন্ট ঘটবে, আমরা আপনার
          সরবরাহ করা URL-এ একটি POST অনুরোধ পাঠাব, যেখানে ইভেন্টের বিস্তারিত
          তথ্য থাকবে।
        </p>
      </section>

      <section id="best-practices" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          সেরা অনুশীলন (Best Practices)
        </h2>
        <ul className="list-disc list-inside text-oa-text-secondary space-y-3">
          <li>
            <span className="font-semibold text-white">ক্যাশিং:</span> ঘন ঘন
            একই অনুরোধ পাঠানোর পরিবর্তে প্রতিক্রিয়াগুলো ক্যাশ করে রাখুন, বিশেষ করে
            যে ডেটা খুব বেশি পরিবর্তন হয় না।
          </li>
          <li>
            <span className="font-semibold text-white">ত্রুটি পরিচালনা:</span>{" "}
            আপনার অ্যাপ্লিকেশনে একটি শক্তিশালী ট্রাই-ক্যাচ (try-catch) ব্লক
            এবং রিট্রাই (retry) লজিক ব্যবহার করুন, বিশেষ করে নেটওয়ার্ক
            সমস্যার জন্য।
          </li>
          <li>
            <span className="font-semibold text-white">
              নিরাপত্তা:
            </span>{" "}
            আপনার API কী ক্লায়েন্ট-সাইড কোডে (যেমন, ব্রাউজারে) সরাসরি প্রকাশ
            করবেন না। এটি একটি নিরাপদ সার্ভারে সংরক্ষণ করুন এবং সেখান থেকে
            অনুরোধ পাঠান।
          </li>
          <li>
            <span className="font-semibold text-white">
              অ্যাসিঙ্ক্রোনাস অনুরোধ:
            </span>{" "}
            দীর্ঘ সময় ধরে চলমান অনুরোধগুলোর জন্য অ্যাসিঙ্ক্রোনাস প্যাটার্ন
            ব্যবহার করুন, যাতে আপনার অ্যাপ্লিকেশন ব্লক হয়ে না যায়।
          </li>
        </ul>
      </section>
    </>
  );
}
