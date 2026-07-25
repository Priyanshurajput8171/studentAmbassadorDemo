

export default function Loading() {
  return (
    <div className="space-y-6 p-10">
      <div className="h-10 w-64 animate-pulse rounded bg-gray-300" />

      <div className="grid gap-6 md:grid-cols-3">
        {[1,2,3].map((item) => (
          <div
            key={item}
            className="h-52 animate-pulse rounded-xl bg-gray-300"
          />
        ))}
      </div>
    </div>
  );
}