export function sortEntities(entities) {
    const names = new Set();
    const labels = new Set();
    entities.forEach(entity => {
        names.add(entity.name);
        entity.labels.forEach(label => {
            labels.add(label);
        });
    });
    return { names: [...names], labels: [...labels] };
}
