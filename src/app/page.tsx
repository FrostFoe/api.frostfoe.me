import React from "react";
import Image from "next/image";
import Link from "next/link";

type IconComponent = () => JSX.Element;
const CookbookIcon: IconComponent = () => (
  <img src="/icons/cookbook.svg" className="w-5 h-5" alt="Cookbook" />
);

const ForumIcon: IconComponent = () => (
  <img src="/icons/forum.svg" className="w-5 h-5" alt="Forum" />
);

const ChevronIcon: IconComponent = () => (
  <img
    src="/icons/chevron.svg"
    className="w-2 h-2 text-oa-text-tertiary"
    alt="Chevron"
  />
);

const CopyIcon: IconComponent = () => (
  <img
    src="/icons/copy.svg"
    className="w-4 h-4 text-oa-text-tertiary"
    alt="Copy"
  />
);

const ArrowIcon: IconComponent = () => (
  <img
    src="/icons/arrow.svg"
    className="w-5 h-5 ml-2 text-white flex-shrink-0"
    alt="Arrow"
  />
);

const ChatIcon: IconComponent = () => (
  <img
    src="/icons/chat.svg"
    className="text-oa-text-secondary w-6 h-6"
    alt="Chat"
  />
);

const VisionIcon: IconComponent = () => (
  <img
    src="/icons/vision.svg"
    className="text-oa-text-secondary w-6 h-6"
    alt="Vision"
  />
);

const ImageGenerationIcon: IconComponent = () => (
  <img
    src="/icons/image-generation.svg"
    className="text-oa-text-secondary w-6 h-6"
    alt="Image generation"
  />
);

const AudioIcon: IconComponent = () => (
  <img
    src="/icons/audio.svg"
    className="text-oa-text-secondary w-6 h-6"
    alt="Audio"
  />
);

const AgentIcon: IconComponent = () => (
  <img
    src="/icons/agent.svg"
    className="text-oa-text-secondary w-6 h-6"
    alt="Agent"
  />
);

const ReasoningIcon: IconComponent = () => (
  <img
    src="/icons/reasoning.svg"
    className="text-oa-text-secondary w-6 h-6"
    alt="Reasoning"
  />
);

const StructuredDataIcon: IconComponent = () => (
  <img
    src="/icons/structured-data.svg"
    className="text-oa-text-secondary w-6 h-6"
    alt="Structured data"
  />
);

const TailorUseCaseIcon: IconComponent = () => (
  <img
    src="/icons/tailor-use-case.svg"
    className="text-oa-text-secondary w-6 h-6"
    alt="Tailor use case"
  />
);

const HelpCenterIcon: IconComponent = () => (
  <img
    src="/icons/help-center.svg"
    className="text-oa-text-secondary w-6 h-6"
    alt="Help center"
  />
);

const DeveloperForumIcon: IconComponent = () => (
  <img
    src="/icons/developer-forum.svg"
    className="text-oa-text-secondary w-6 h-6"
    alt="Developer forum"
  />
);

const CookbookIconFooter: IconComponent = () => (
  <img
    src="/icons/cookbook-footer.svg"
    className="text-oa-text-secondary w-6 h-6"
    alt="Cookbook"
  />
);

const StatusIcon: IconComponent = () => (
  <img
    src="/icons/status.svg"
    className="text-oa-text-secondary w-6 h-6"
    alt="Status"
  />
);

const navLinks = [{ label: "Docs", active: true }, { label: "API reference" }];

const sidebarLinks: Array<{
  label: string;
  href: string;
  Icon: IconComponent;
}> = [
  { label: "Cookbook", href: "#", Icon: CookbookIcon },
  { label: "Forum", href: "#", Icon: ForumIcon },
];

const agentKitTabs = [
  { label: "Design", disabled: false },
  { label: "Deploy", disabled: true },
  { label: "Optimize", disabled: true },
];

const modelCards = [
  {
    title: "GPT-5",
    description: "The best model for coding and agentic tasks across domains",
    image:
      "https://cdn.openai.com/API/docs/images/model-page/model-art/gpt-5.jpg",
  },
  {
    title: "GPT-5 mini",
    description:
      "A faster, cost-efficient version of GPT-5 for well-defined tasks",
    image:
      "https://cdn.openai.com/API/docs/images/model-page/model-art/gpt-5-mini.jpg",
  },
  {
    title: "GPT-5 nano",
    description: "Fastest, most cost-efficient version of GPT-5",
    image:
      "https://cdn.openai.com/API/docs/images/model-page/model-art/gpt-5-nano.jpg",
  },
];

const startBuildingItems: Array<{
  title: string;
  description: string;
  Icon: IconComponent;
}> = [
  {
    title: "Read and generate text",
    description: "Use the API to prompt a model and generate text",
    Icon: ChatIcon,
  },
  {
    title: "Use a model's vision capabilities",
    description: "Allow models to see and analyze images in your application",
    Icon: VisionIcon,
  },
  {
    title: "Generate images as output",
    description: "Create images with GPT Image 1",
    Icon: ImageGenerationIcon,
  },
  {
    title: "Build apps with audio",
    description: "Analyze, transcribe, and generate audio with API endpoints",
    Icon: AudioIcon,
  },
  {
    title: "Build agentic applications",
    description: "Use the API to build agents that use tools and computers",
    Icon: AgentIcon,
  },
  {
    title: "Achieve complex tasks with reasoning",
    description: "Use reasoning models to carry out complex tasks",
    Icon: ReasoningIcon,
  },
  {
    title: "Get structured data from models",
    description: "Use Structured Outputs for JSON-schema aligned responses",
    Icon: StructuredDataIcon,
  },
  {
    title: "Tailor to your use case",
    description: "Adjust models with fine-tuning, evals, and distillation",
    Icon: TailorUseCaseIcon,
  },
];

const footerResources: Array<{
  title: string;
  description: string;
  href: string;
  Icon: IconComponent;
}> = [
  {
    title: "Help center",
    description: "Frequently asked account and billing questions",
    href: "#",
    Icon: HelpCenterIcon,
  },
  {
    title: "Developer forum",
    description: "Discuss topics with other developers",
    href: "#",
    Icon: DeveloperForumIcon,
  },
  {
    title: "Cookbook",
    description: "Open-source collection of examples and guides",
    href: "#",
    Icon: CookbookIconFooter,
  },
  {
    title: "Status",
    description: "Check the status of OpenAI services",
    href: "#",
    Icon: StatusIcon,
  },
];

export default function Page() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 fixed top-0 left-0 h-full border-r border-oa-border bg-oa-dark p-4 flex-col hidden md:flex z-10">
        <div className="h-14 flex items-center px-2">
          <Link href="#" className="flex items-center gap-2">
            <img
              src="/logo.svg"
              className="text-white h-6"
              alt="OpenAI Platform"
            />
            <span className="font-semibold text-lg text-white">
              OpenAI Platform
            </span>
          </Link>
        </div>

        <div className="mt-4 px-2">
          <button className="flex w-full items-center justify-between rounded-lg bg-oa-bg-dark px-3 py-2 text-left text-sm text-oa-text-tertiary border border-oa-border hover:border-oa-text-secondary">
            <span>Search</span>
            <span className="flex items-center gap-1 text-xs">
              <kbd className="px-1.5 py-0.5 rounded border border-oa-border bg-oa-bg-light">
                ⌘
              </kbd>
              <kbd className="px-1.5 py-0.5 rounded border border-oa-border bg-oa-bg-light">
                K
              </kbd>
            </span>
          </button>
        </div>

        <nav className="mt-6 flex-1 space-y-2 px-2">
          {sidebarLinks.map(({ Icon, label, href }) => (
            <Link key={label} href={href} className="sidebar-link">
              <Icon />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex-1 md:pl-64">
        <header className="sticky top-0 z-0 h-14 border-b border-oa-border bg-oa-dark/80 backdrop-blur-sm">
          <div className="flex h-full items-center justify-between px-4 md:px-8">
            <div className="md:hidden" />

            <nav className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href="#"
                  className={
                    link.active ? "main-nav-link-active" : "main-nav-link"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex-1 md:hidden" />

            <div className="flex items-center gap-3">
              <Link href="#" className="btn btn-ghost text-sm hidden sm:block">
                Log in
              </Link>
              <Link href="#" className="btn btn-primary text-sm">
                Sign up
              </Link>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-12">
          <div className="max-w-4xl mx-auto">
            <section className="mb-16">
              <h1 className="text-4xl font-bold text-white mb-6">
                OpenAI Platform
              </h1>

              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="flex flex-col justify-center h-full">
                  <h2 className="text-lg font-semibold text-white">
                    Developer quickstart
                  </h2>
                  <p className="text-md text-oa-text-secondary mt-2 mb-6">
                    Make your first API request in minutes. Learn the basics of
                    the OpenAI platform.
                  </p>
                  <div>
                    <Link
                      href="#"
                      className="inline-block btn btn-primary px-6 py-2.5 text-base"
                    >
                      Get started
                    </Link>
                  </div>
                </div>

                <div className="bg-oa-bg-dark rounded-lg border border-oa-border overflow-hidden">
                  <div className="flex justify-between items-center px-4 py-2 border-b border-oa-border">
                    <div className="text-sm text-oa-text-secondary flex items-center gap-2">
                      <span>javascript</span>
                      <ChevronIcon />
                    </div>
                    <button
                      className="btn-ghost p-1 rounded"
                      aria-label="Copy code"
                    >
                      <CopyIcon />
                    </button>
                  </div>
                  <div className="p-4 text-sm">
                    <pre>
                      <code className="font-mono">
                        <span className="text-syntax-keyword">import</span>{" "}
                        OpenAI <span className="text-syntax-keyword">from</span>{" "}
                        <span className="text-syntax-string">"openai"</span>;
                        {"\n"}
                        <span className="text-syntax-keyword">const</span>{" "}
                        client ={" "}
                        <span className="text-syntax-keyword">new</span>{" "}
                        <span className="text-syntax-class">OpenAI</span>();
                        {"\n\n"}
                        <span className="text-syntax-keyword">const</span>{" "}
                        response ={" "}
                        <span className="text-syntax-keyword">await</span>{" "}
                        client.responses.create(
                        {"{"}
                        {"\n  "}
                        <span className="text-syntax-const">model</span>:{" "}
                        <span className="text-syntax-string">"gpt-5"</span>,
                        {"\n  "}
                        <span className="text-syntax-const">input</span>:{" "}
                        <span className="text-syntax-string">
                          "Write a short bedtime story about a unicorn."
                        </span>
                        {"\n"}
                        {"});\n\n"}
                        console.
                        <span className="text-syntax-function">log</span>
                        (response.output_text);
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Build with AgentKit
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-3 mb-6">
                    {agentKitTabs.map(({ label, disabled }) => (
                      <button
                        key={label}
                        className={`btn w-full text-left btn-secondary ${disabled ? "opacity-50" : ""}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  <button className="w-full text-left p-4 rounded-lg bg-oa-bg-light hover:bg-opacity-80">
                    <div className="flex justify-between items-center">
                      <span className="text-oa-text-secondary">
                        <span className="text-white font-medium">Design </span>
                        and version workflows with Agent builder or use the
                        Agents SDK for code-level control.
                      </span>
                      <ArrowIcon />
                    </div>
                  </button>
                </div>

                <div className="bg-oa-bg-dark rounded-lg border border-oa-border p-2">
                  <Image
                    src="https://cdn.openai.com/API/docs/images/builder-home-visual-dark.png"
                    alt="Agent builder interface"
                    className="rounded-md w-full h-auto"
                    width={1000}
                    height={750}
                    priority
                  />
                </div>
              </div>
            </section>

            <section className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">
                  Browse models
                </h2>
                <Link
                  href="#"
                  className="text-sm text-oa-text-tertiary hover:text-white"
                >
                  View all
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {modelCards.map(({ title, description, image }) => (
                  <Link
                    key={title}
                    href="#"
                    className="flex flex-col gap-4 text-white hover:text-white group"
                  >
                    <div
                      className="h-[180px] w-full rounded-lg bg-cover bg-center overflow-hidden border border-oa-border group-hover:border-oa-text-tertiary"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                    <div>
                      <div className="font-semibold">{title}</div>
                      <div className="text-sm text-oa-text-secondary">
                        {description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-lg font-semibold text-white mb-6">
                Start building
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {startBuildingItems.map(({ title, description, Icon }) => (
                  <Link
                    key={title}
                    href="#"
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-oa-bg-dark"
                  >
                    <div className="text-oa-text-secondary mt-1">
                      <Icon />
                    </div>
                    <div>
                      <div className="font-medium text-white">{title}</div>
                      <div className="text-sm text-oa-text-secondary">
                        {description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-24 mb-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {footerResources.map(({ title, description, href, Icon }) => (
                  <Link
                    key={title}
                    href={href}
                    className="card card-hover text-center p-6 group"
                  >
                    <div className="relative">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="absolute top-0 right-0 text-oa-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.243 6.757a1 1 0 0 1 1 1v7.072a1 1 0 0 1-2 0v-4.657L8.464 16.95a1 1 0 0 1-1.414-1.414l6.778-6.779H9.172a1 1 0 0 1 0-2h7.07Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <div className="flex justify-center mb-2">
                        <Icon />
                      </div>
                      <div className="font-bold text-white mb-2">{title}</div>
                      <div className="text-sm text-oa-text-secondary">
                        {description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
