import Image from "next/image";
import { organization } from "@/data/dummy";

export default function Organization() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">
          Struktur Organisasi
        </h2>

        {/* Ketua Clan */}
        <div className="flex justify-center mb-14">
          <div className="bg-zinc-900 rounded-xl p-6 flex items-center gap-6 w-full max-w-md">
            <Image
              src={organization.leader.image}
              alt={organization.leader.nickname}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-white">
                {organization.leader.nickname}
              </h3>
              <p className="text-yellow-500 font-semibold">
                {organization.leader.position}
              </p>
            </div>
          </div>
        </div>

        {/* Petugas / Admin */}
        <h3 className="text-xl font-semibold text-gray-300 text-center mb-6">
          Petugas & Admin
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {organization.officers.map((member, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-xl p-5 flex items-center gap-4"
            >
              <Image
                src={member.image}
                alt={member.nickname}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-white">{member.nickname}</h4>
                <p className="text-yellow-500 text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
