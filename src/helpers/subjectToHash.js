export default function subjectToHash(subjects) {
    return subjects.reduce(
        (accumulator, subject) => ({
            ...accumulator,
            [subject.id]: subject
        }),
        {}
    );
}