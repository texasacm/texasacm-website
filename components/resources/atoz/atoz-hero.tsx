import Header from '@/components/header';
import { BookOpen } from 'lucide-react';

export default function AtoZHero() {
    return (
        <section className="hero-banner">
            <Header />
            <div className="container px-4 pt-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <BookOpen className="mx-auto mb-4 h-12 w-12 text-white" />
                    <h1 className="mb-4 text-4xl font-bold text-white">CS A to Z</h1>
                    <p className="text-xl text-white/90">
                        A comprehensive dictionary of CS terms for new Computer Science students at
                        UT Austin.
                    </p>
                </div>
            </div>
        </section>
    );
}
