import TableExamples from "@/components/table";
import LabCard from "@/components/lab-card";
import { Card, CardPlain, SelectDropdown, TextField } from "@idds/react";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

export default function ProfilLaboratorium() {
    const [selected, setSelected] = useState<any[]>([]);
    const options = [
        { label: "Gretchen Mango", value: "gretchen" },
        { label: "Alfonso Vetrovs", value: "alfonso" },
        { label: "Terry Lubin", value: "terry" },
        { label: "Giana Levin", value: "giana" },
    ];

    // Dummy array 9 data card untuk mengisi maksimal 3 baris (3 kolom x 3 baris = 9 item)
    const cardsData = Array.from({ length: 9 }).map((_, i) => ({
        id: i + 1,
        title: `Laboratorium ${i + 1}`,
        description: "This is a placeholder title for demonstration purposes.",
    }));

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-xl md:text-2xl font-semibold text-content-primary">
                        Profil Laboratorium
                    </h1>
                    <p className="text-sm text-content-secondary mt-1">
                        Informasi terkait laboratorium
                    </p>
                </div>
            </div>

            {/* Hapus h-80 agar tinggi container fleksibel mengikuti isi card */}
            <CardPlain className="flex flex-col space-y-6 w-full p-4 md:p-6">
                {/* Filter & Search Bar */}
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row items-center h-full w-full gap-4">
                        <div className="flex-3">
                            <TextField
                                value=""
                                onChange={() => {}}
                                placeholder="Search..."
                                prefixIcon={<IconSearch size={16} />}
                            />
                        </div>

                        <div className="flex-1">
                            <SelectDropdown
                                options={options}
                                selected={selected}
                                onSelect={(val) => setSelected(val as any[])}
                                placeholder="Select People"
                                indicator="check"
                                multiple
                            />
                        </div>
                    </div>
                </div>

                {/* Grid Card: Maksimal 3 kolom di layar besar (3 baris x 3 kolom) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    <LabCard
                        fakultas="FARMASI"
                        laboratorium="BAHAN ALAM"
                        deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti."
                        lokasi="Lab Terpadu"
                        authorName="Nurrahmi Arny, A.Md. Farm"
                        authorRole="Laboran"
                        mediaSrc=""
                    />
                    {/* {cardsData.map((item) => (
                        <Card
                            key={item.id}
                            variant="basic"
                            mediaPosition="bottom"
                            avatar="/assets/img/Tapin_Developer.jpeg"
                            avatarAlt="Avatar"
                            title={item.title}
                            description={item.description}
                            mediaAlt="Card media"
                            showButton={true}
                            buttonText="Button CTA"
                            buttonHierarchy="primary"
                            className="max-w-sm w-full h-full flex flex-col justify-between"
                        />
                    ))} */}
                </div>
            </CardPlain>
        </div>
    );
}
