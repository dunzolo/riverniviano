import React, { useState } from "react";
import { createMatch, getAllCategories, getSquadsByCategory } from "@/api/supabase";
import { GetServerSideProps } from "next";
import { MatchDatum } from "@/models/Match";
import { Squad } from "@/models/Squad";

type Props = {
    categories: string[]
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const categories = await getAllCategories();
        return {
            props: {
                categories,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};

export default function Create({ categories }: Props) {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [subcategories, setSubcategories] = useState<Squad[]>([]);

    const [form, setForm] = useState<MatchDatum>({
        id: "",
        created_at: "",
        day: "",
        hour: "",
        squad_home: {
            id: "",
            name: "",
            logo: "",
            group: "",
            category: "",
            created_at: ""
        },
        squad_away: {
            id: "",
            name: "",
            logo: "",
            group: "",
            category: "",
            created_at: ""
        },
        outcome: "",
        score_home: 0,
        score_away: 0,
        field: ""
    })

    async function handleSubmitMatch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const { day, hour, squad_home, squad_away, field } = form;
        await createMatch(day, hour, squad_home.id, squad_away.id, field)
    }

    const handleSelectCategory = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const category = event.target.value;
        setSelectedCategory(category);

        const data = await getSquadsByCategory(category);
        setSubcategories(data);
    };

    const handleChangeInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
    }

    const handleChangeSelectField = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
    }

    const handleChangeSelect = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: { id: value } })
    }

    return (
        <div>
            <h1>Crea Match</h1>
            <pre>{JSON.stringify(categories, null, 2)}</pre>

            <select value={selectedCategory} onChange={handleSelectCategory}>
                <option value="">Seleziona una categoria</option>
                {
                    categories.map(category => {
                        return (
                            <option key={category} value={category}>{category}</option>
                        )
                    })
                }
            </select>

            <form action="" onSubmit={handleSubmitMatch}>
                <div>
                    <input type="date" name="day" value={form.day} onChange={handleChangeInput} />
                    <input type="time" name="hour" value={form.hour} onChange={handleChangeInput} />
                    <select name="field" value={form.field} onChange={handleChangeSelectField}>
                        <option value="Campo 1">Campo 1</option>
                        <option value="Campo 2">Campo 2</option>
                    </select>
                </div>

                <div>
                    <select name="squad_home" value={form.squad_home.id} onChange={handleChangeSelect}>
                        <option value="">Seleziona una subcategoria</option>
                        {subcategories.map((subcategory, index) => (
                            <option key={index} value={subcategory.id}>{subcategory.name}</option>
                        ))}
                    </select>

                    <select name="squad_away" value={form.squad_away.id} onChange={handleChangeSelect}>
                        <option value="">Seleziona una subcategoria</option>
                        {subcategories.map((subcategory, index) => (
                            <option key={index} value={subcategory.id}>{subcategory.name}</option>
                        ))}
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}