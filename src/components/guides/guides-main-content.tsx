import { CodeSnippet } from "@/components/code-snippet";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export function GuidesMainContent() {
  const errorCodeExample = `{
  "error": "Invalid API Key",
  "message": "The provided API key is incorrect or has expired.",
  "code": "AUTH_001",
  "status": 401
}`;
  
  const retryLogicExample = `async function fetchWithRetry(url, options, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return response.json();
      }
      if (response.status >= 500) {
        console.warn(\`Server error. Retrying in \${delay / 1000}s...\`);
        await new Promise(res => setTimeout(res, delay));
        delay *= 2;
        continue;
      }
      const errorData = await response.json();
      throw new Error(errorData.message || 'Client-side error');
    } catch (error) {
      if (i === retries - 1) throw error;
      console.warn(\`Network error. Retrying...\`);
      await new Promise(res => setTimeout(res, delay));
    }
  }
}`;

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        নির্দেশিকা
      </h1>
      <p className="text-oa-text-secondary mb-12">
        আমাদের প্ল্যাটফর্ম ব্যবহার করে শক্তিশালী এবং নির্ভরযোগ্য অ্যাপ্লিকেশন তৈরির জন্য গুরুত্বপূর্ণ নির্দেশিকা এবং সেরা অনুশীলন সম্পর্কে জানুন। এই গাইডগুলো আপনাকে আমাদের এপিআই-এর সম্পূর্ণ সম্ভাবনাকে কাজে লাগাতে সাহায্য করবে।
      </p>

      <section id="errors" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          ত্রুটি ব্যবস্থাপনা (Error Handling)
        </h2>
        <p className="text-oa-text-secondary mb-6">
          একটি স্থিতিশীল অ্যাপ্লিকেশন তৈরির জন্য সঠিক ত্রুটি ব্যবস্থাপনা অপরিহার্য। আমাদের এপিআই স্ট্যান্ডার্ড HTTP স্ট্যাটাস কোড ব্যবহার করে। 4xx রেঞ্জের কোড ক্লায়েন্ট-সাইড ত্রুটি (যেমন, ভুল ইনপুট) এবং 5xx রেঞ্জের কোড সার্ভার-সাইড সমস্যা নির্দেশ করে। প্রতিটি ত্রুটির সাথে একটি তথ্যবহুল JSON অবজেক্ট প্রদান করা হয়।
        </p>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-4 border-b">
            <span className="text-sm text-oa-text-secondary">
              উদাহরণ ত্রুটি প্রতিক্রিয়া (401 Unauthorized)
            </span>
          </div>
          <CodeSnippet
            language="json"
            showLineNumbers={false}
            code={errorCodeExample}
          />
        </div>
      </section>

      <section id="rate-limiting" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          রেট লিমিট (Rate Limiting)
        </h2>
         <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>HTTP 429 Too Many Requests</AlertTitle>
          <AlertDescription>
            আপনার প্ল্যান অনুযায়ী প্রতি মিনিটে নির্দিষ্ট সংখ্যক অনুরোধের সীমা অতিক্রম করলে আপনি `429 Too Many Requests` স্ট্যাটাস কোড পাবেন। রেসপন্স হেডারে (`X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`) আপনি আপনার বর্তমান লিমিট সম্পর্কে রিয়েল-টাইম তথ্য পাবেন।
          </AlertDescription>
        </Alert>
      </section>

      <section id="best-practices" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          সেরা অনুশীলন (Best Practices)
        </h2>
        <div className="text-oa-text-secondary space-y-6">
          <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>নিরাপত্তা</AlertTitle>
            <AlertDescription>
              আপনার API কী সর্বদা গোপন রাখুন। এটি ক্লায়েন্ট-সাইড কোডে (যেমন, ব্রাউজারে) সরাসরি প্রকাশ করবেন না। আপনার কী একটি নিরাপদ সার্ভার বা এনভায়রনমেন্ট ভেরিয়েবলে সংরক্ষণ করুন এবং সেখান থেকে অনুরোধ পাঠান।
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="font-semibold text-white mb-2">রিট্রাই লজিক (Retry Logic)</h3>
            <p className="mb-4">নেটওয়ার্ক বা সার্ভারজনিত ক্ষণস্থায়ী সমস্যার কারণে অনুরোধ ব্যর্থ হতে পারে। এই ধরনের ক্ষেত্রে, এক্সপোনেনশিয়াল ব্যাকঅফ (exponential backoff) সহ একটি রিট্রাই মেকানিজম ব্যবহার করা উচিত। এটি আপনার অ্যাপ্লিকেশনকে আরও সহনশীল করে তুলবে।</p>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-4 border-b">
                <span className="text-sm text-oa-text-secondary">
                  JavaScript এ রিট্রাই লজিকের উদাহরণ
                </span>
              </div>
              <CodeSnippet
                language="javascript"
                showLineNumbers={true}
                code={retryLogicExample}
              />
            </div>
          </div>
           <div>
            <h3 className="font-semibold text-white mb-2">ক্যাশিং (Caching)</h3>
            <p>যে ডেটা ঘন ঘন পরিবর্তন হয় না (যেমন, সূরার তালিকা), সেগুলোর জন্য ক্যাশিং ব্যবহার করুন। এটি আপনার অ্যাপ্লিকেশনের পারফরম্যান্স বাড়াবে এবং অপ্রয়োজনীয় এপিআই কল কমিয়ে আনবে।</p>
          </div>
        </div>
      </section>
    </>
  );
}
