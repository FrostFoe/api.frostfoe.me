import { Breadcrumb } from "@/components/shared/breadcrumb";
import { EnhancedSidebar } from "@/components/shared/sidebar";
import { Header } from "@/components/shared/header";
import { CheckCircle, AlertCircle, Activity, Zap, Clock } from "lucide-react";

export default function StatusPage() {
  // Mock data - in real app, this would come from an API
  const systemStatus = {
    overall: "operational",
    uptime: 99.98,
    responseTime: 145, // ms
    activeRequests: 2847,
  };

  const services = [
    {
      name: "চ্যাট এপিআই",
      status: "operational",
      uptime: 99.99,
      responseTime: 120,
    },
    {
      name: "হাদিস এপিআই",
      status: "operational",
      uptime: 99.98,
      responseTime: 150,
    },
    {
      name: "কুরআন এপিআই",
      status: "operational",
      uptime: 100,
      responseTime: 140,
    },
    {
      name: "ওয়েবহুক সিস্টেম",
      status: "operational",
      uptime: 99.97,
      responseTime: 160,
    },
  ];

  const incidents = [
    {
      date: "২০২৪-০১-১০",
      title: "সংক্ষিপ্ত API লেটেন্সি বৃদ্ধি",
      description: "চ্যাট এপিআই এ ৩০ মিনিটের লেটেন্সি বৃদ্ধি হয়েছিল।",
      duration: "৩০ মিনিট",
      status: "resolved",
    },
    {
      date: "২০২৪-০১-০৮",
      title: "ডাটাবেস রক্ষণাবেক্ষণ",
      description: "নিয়মিত রক্ষণাবেক্ষণ এবং অপটিমাইজেশন।",
      duration: "পরিকল্পিত",
      status: "completed",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <EnhancedSidebar />
      <div className="flex-1 md:ml-64">
        <Header />
        <Breadcrumb
          items={[
            { label: "ডকুমেন্টেশন", href: "/" },
            { label: "সিস্টেম স্ট্যাটাস", href: "/status" },
          ]}
        />
        <main className="p-4 sm:p-6 md:p-8">
          {/* Header */}
          <section className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white leading-tight">
              সিস্টেম স্ট্যাটাস
            </h1>
            <p className="text-sm sm:text-lg text-oa-text-secondary">
              ফ্রস্টফয় এপিআই প্ল্যাটফর্মের রিয়েল-টাইম স্ট্যাটাস এবং কর্মক্ষমতা মেট্রিক্স।
            </p>
          </section>

          {/* Overall Status */}
          <section className="mb-8 sm:mb-12">
            <div className="bg-oa-bg-dark border border-oa-border rounded-lg p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    সামগ্রিক স্ট্যাটাস
                  </h2>
                  <p className="text-xs sm:text-base text-oa-text-secondary">
                    সমস্ত সিস্টেম স্বাভাবিকভাবে চলছে
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-base sm:text-lg font-semibold text-green-400">
                    সক্রিয়
                  </span>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 bg-oa-dark rounded border border-oa-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-blue-400" />
                    <span className="text-xs sm:text-sm text-oa-text-secondary">
                      আপটাইম
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    {systemStatus.uptime}%
                  </p>
                </div>

                <div className="p-3 sm:p-4 bg-oa-dark rounded border border-oa-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs sm:text-sm text-oa-text-secondary">
                      প্রতিক্রিয়া সময়
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    {systemStatus.responseTime}ms
                  </p>
                </div>

                <div className="p-3 sm:p-4 bg-oa-dark rounded border border-oa-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span className="text-xs sm:text-sm text-oa-text-secondary">
                      সক্রিয় অনুরোধ
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    {systemStatus.activeRequests.toLocaleString()}
                  </p>
                </div>

                <div className="p-3 sm:p-4 bg-oa-dark rounded border border-oa-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-xs sm:text-sm text-oa-text-secondary">
                      ত্রুটি হার
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white">0.02%</p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Status */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">সেবা স্ট্যাটাস</h2>

            <div className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="p-3 sm:p-4 bg-oa-bg-dark border border-oa-border rounded-lg"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-3">
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-1">
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-white">
                          {service.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-oa-text-secondary">
                          {service.status === "operational"
                            ? "সকল সিস্টেম সক্রিয়"
                            : "সমস্যা সনাক্ত"}
                        </p>
                      </div>
                    </div>
                    <div className="text-left sm:text-right flex gap-4 sm:gap-0">
                      <div>
                        <p className="text-xs sm:text-sm font-mono text-oa-text-secondary">
                          {service.responseTime}ms
                        </p>
                        <p className="text-xs text-green-400">
                          {service.uptime}% আপটাইম
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Performance Bar */}
                  <div className="w-full h-1 bg-oa-dark rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                      style={{ width: `${service.uptime}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Incidents */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">সাম্প্রতিক ঘটনা</h2>

            {incidents.length > 0 ? (
              <div className="space-y-4">
                {incidents.map((incident, index) => (
                  <div
                    key={index}
                    className="p-4 bg-oa-bg-dark border border-oa-border rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3 flex-1">
                        {incident.status === "resolved" ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-yellow-400 mt-1" />
                        )}
                        <div className="flex-1">
                          <h3 className="font-semibold text-white">
                            {incident.title}
                          </h3>
                          <p className="text-sm text-oa-text-secondary mt-1">
                            {incident.description}
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-oa-text-tertiary">
                            <span>{incident.date}</span>
                            <span>•</span>
                            <span>{incident.duration}</span>
                          </div>
                        </div>
                      </div>
                      <span
                        className={
                          incident.status === "resolved"
                            ? "px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400"
                            : "px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-400"
                        }
                      >
                        {incident.status === "resolved"
                          ? "সমাধান করা"
                          : "সম্পূর্ণ"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-oa-bg-dark border border-oa-border rounded-lg">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <p className="text-oa-text-secondary">কোন সাম্প্রতিক সমস্যা নেই</p>
              </div>
            )}
          </section>

          {/* Uptime Chart */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white">৩০ দিনের আপটাইম</h2>

            <div className="bg-oa-bg-dark border border-oa-border rounded-lg p-6">
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded bg-oa-dark border border-oa-border/50 flex items-center justify-center text-xs text-oa-text-tertiary hover:bg-oa-border transition-colors cursor-pointer"
                    title={`দিন ${i + 1}: 99.9% আপটাইম`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-oa-text-secondary">
                <span>উচ্চ</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded bg-yellow-500/40 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded bg-green-500/60 border border-green-500/50"></div>
                  <div className="w-3 h-3 rounded bg-green-500/80 border border-green-500/50"></div>
                </div>
                <span>কম</span>
              </div>
            </div>
          </section>

          {/* Footer Info */}
          <section className="border-t border-oa-border pt-8">
            <p className="text-oa-text-secondary text-sm text-center">
              এই পৃষ্ঠাটি প্রতি মিনিটে স্বয়ংক্রিয়ভাবে আপডেট হয়। 
              <br />
              গুরুতর সমস্যার জন্য আমাদের <a href="mailto:support@frostfoe.me" className="text-white hover:underline">সাপোর্ট টিম</a> এর সাথে যোগাযোগ করুন।
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
