import { stats } from "@/data/dummy";

export default function Stats() {
  return (
    <section className="py-20 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        <div>
          <p className="text-4xl font-bold text-yellow-500">
            {stats.totalMember}
          </p>
          <p className="text-gray-400 mt-2">Total Member</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-yellow-500">
            {stats.activeMember}
          </p>
          <p className="text-gray-400 mt-2">Active Member</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-yellow-500">
            {stats.totalTeam}
          </p>
          <p className="text-gray-400 mt-2">Total Tim</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-yellow-500">
            {stats.achievement}
          </p>
          <p className="text-gray-400 mt-2">Pencapaian</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-yellow-500">
            {stats.totalEvent}
          </p>
          <p className="text-gray-400 mt-2">Event</p>
        </div>
      </div>
    </section>
  );
}
