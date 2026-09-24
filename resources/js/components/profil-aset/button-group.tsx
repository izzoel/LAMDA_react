import { useState } from "react";
import { ButtonGroup } from "@idds/react";
import { IconFileExport, IconFileImport, IconPlus } from "@tabler/icons-react";

export default function ButtonGroupBasic() {
    const [selectedButton, setselectedButton] = useState<string | number>();

    const action = [
        // {
        //     value: "tambah",
        //     label: (
        //         <span className="flex items-center gap-2">
        //             <IconPlus size={16} />
        //             Data
        //         </span>
        //     ),
        // },
        {
            value: "import",
            label: (
                <span className="flex items-center gap-2">
                    <IconFileImport size={16} />
                    Import
                </span>
            ),
        },
        {
            value: "export",
            label: (
                <span className="flex items-center gap-2">
                    <IconFileExport size={16} />
                    Export
                </span>
            ),
        },
    ];

    return (
        <div>
            <div>
                <ButtonGroup
                    options={action}
                    value={selectedButton}
                    onChange={setselectedButton}
                />
            </div>
        </div>
    );
}
