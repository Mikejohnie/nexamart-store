const Content = () => {
  return (
    <main className="w-full py-16 px-6 bg-gray-100/50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Intro Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-4">
            Discover Premium Products
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            High-quality items designed to make everyday living better.
          </p>
        </div>

        {/* Feature / Info Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "High Quality",
              description:
                "We ensure all products are carefully selected for the best quality.",
            },
            {
              title: "Fast Delivery",
              description:
                "Your orders arrive quickly, safely, and reliably to your door.",
            },
            {
              title: "Customer Support",
              description:
                "Our support team is here 24/7 to help with any questions.",
            },
            {
              title: "Smooth Transactions",
              description: "You get immediate refunds on cancelled orders.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="font-semibold text-2xl text-zinc-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </section>

        {/* Content Sections */}
        <section className="space-y-10">
          <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
              About Our Store
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vitae justo at metus fringilla aliquet. Suspendisse potenti.
              Curabitur sit amet quam vel risus elementum varius.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
              Why Choose Us
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
              More Features
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Content;
