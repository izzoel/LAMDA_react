import { CardPlain } from "@idds/react";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import TableExamples from "@/components/table";

export default function AsetLaboratorium() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-xl md:text-2xl font-semibold text-content-primary">
                        Aset Laboratorium
                    </h1>
                    <p className="text-sm text-content-secondary mt-1">
                        Ketersediaan dan kondisi aset laboratorium
                    </p>
                </div>
            </div>

            <CardPlain className="flex flex-col space-y-6 w-full p-4 md:p-6">
                <TableExamples />
            </CardPlain>
        </div>
    );
}
