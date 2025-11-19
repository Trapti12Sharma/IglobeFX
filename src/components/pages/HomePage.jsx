import React from "react";

export default function HomePage() {
  return (
    <div>
      {/* Add the sections similar to reference: stats, features, pricing, testimonials, CTA */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold mb-6">Why choose iGlobeFX</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Low spreads</h3>
            <p className="mt-2 text-sm text-gray-600">
              Competitive pricing for active traders.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Fast execution</h3>
            <p className="mt-2 text-sm text-gray-600">
              Reliable order routing and fast servers.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Pro tools</h3>
            <p className="mt-2 text-sm text-gray-600">
              Charts, signals and more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
